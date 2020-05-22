const puppeteer = require('puppeteer');
const fs = require('fs');

class P12Article {
    constructor(title, url) {
        this.title = title;
        this.url = url;
        this.date = null;
    }

    static async _getInitializeData(page, DOMElement) {
        try {
            let url = await page.evaluate(el => el.getElementsByTagName("a")[0].href, DOMElement);
            let title = await page.evaluate(el => el.innerText, DOMElement);
            //let innerText = await DOMElement.evaluate(node => node.innerText);
            return { url, title }
        } catch (e) {
            console.log("Error obtaining news data: " + e);
        }
    }

    static async build(DOMElement, browser, page) {
        try {
            let article_data = await P12Article._getInitializeData(page, DOMElement);
            let article = new P12Article(article_data.title, article_data.url);
            await article.setDate(browser);
            return article;
        } catch (e) {
            console.log("Error building instance: " + e);
            return null;
        }
    }

    async setDate(browser) {
        let page = await browser.newPage();
        try {
            await page.goto(this.url, { waitUntil: 'networkidle2' });
            let timeNode = (await page.$$(".time"))[0];
            let extractedTime = await page.evaluate(el => el.innerText, timeNode);
            this.date = extractedTime;
        } catch {
            console.log("Can't extract article's date:" + e);
        } finally {
            await page.close();
            return this.date;
        }
    }

    getDate() {
        return this.date;
    }

    getTitle() {
        return this.title;
    }

    getUrl() {
        return this.url;
    }
}

class ExtractionTemplate {
    constructor(json) {
        this.base_url = json.url;
        this.selector = json.selector;
        this.domainClass = json.domainClass;
    }
}

class Scraper {
    async scrap(template, cant = 1) {
        let url = template.base_url;
        let browser = await puppeteer.launch();
        let page = await browser.newPage();
        await page.goto(url, { waitUntil: 'networkidle2' });
        let DOMElements = await page.$$(template.selector);
        let domainElements = [];

        for (let DOMElement of DOMElements) {
            try {
                let domainObject = await template.domainClass.build(DOMElement, browser, page);
                if (domainObject == null) continue;
                domainElements.push(domainObject);
                if (domainElements.length >= cant) break;
            } catch (e) {
                console.log("Can't scrap article:" + e);
            }
        };
        await browser.close();
        return domainElements;
    }
}

function returnValid(article, articles) {
    let ok = true;
    articles.forEach(art => {
        if (art.url === article.url) {
            ok = false;
        }
    });
    return ok;
}
async function processedData(newArticles) {
    newArticles.forEach(article => article.extractDate = new Date());
    console.log(newArticles);
    let currentArticlesString = null;
    try {
        currentArticlesString = await fs.readFileSync('P12Articles.json').toString('utf8');
    } catch (e) {
        console.log("Error writing file: " + e);
    }

    let currentArticles = currentArticlesString ? Array.prototype.slice.call(JSON.parse(currentArticlesString)) : [];
    newArticles = newArticles.filter(article => returnValid(article, currentArticles));
    console.log("Nuevos articulos: ", newArticles);
    newArticles.forEach(art => currentArticles.push(art));
    return currentArticles;
}

let template = new ExtractionTemplate({ url: 'https://www.pagina12.com.ar', selector: 'article', domainClass: P12Article });
let scraper = new Scraper(template);
scraper.scrap(template, 5).then(async(articles) => {
    try {
        console.log("New articles");
        for (let article of articles) {
            console.log(article.getTitle());
            console.log(article.getDate());
            console.log("------------------------------------------------------");
        }
        let data = await processedData(articles);
        let dataString = JSON.stringify(data);
        await fs.writeFileSync('P12Articles.json', dataString);
        console.log("Finished. Processed");
    } catch (e) {
        console.log("Error writing file: " + e);
    }
});