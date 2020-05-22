// ==UserScript==
// @name         AugmenterRioNegro
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Augmenter Rio Negro
// @author       You
// @match        https://www.rionegro.com.ar/
// @grant        GM_setValue
// @grant        GM_getValue
// @grant        GM_xmlhttpRequest
// ==/UserScript==

function saveArticleView(link){
    let articles = JSON.parse(GM_getValue("articles"));
    if (!articles.includes(link.href)){
        articles.push(link.href);
        GM_setValue("articles", JSON.stringify(articles));
    }
}

function getArticleThemes(article){
    return new Promise(resolve => {
        GM_xmlhttpRequest ( {
            method:     "GET",
            url:        article.getElementsByTagName("a")[0].href,
            onload:     function (response) {
                let parser = new DOMParser();
                let doc = parser.parseFromString(response.responseText, "text/html");
                let themes = doc.getElementsByClassName("newsfull__tags")[0].getElementsByTagName("a");
                for(let i = 0; i < themes.length; i++){
                    try{
                        article.appendChild(themes[i]);
                    }catch(e){console.log("Themes not found")}
                }
            }
        } );
    });
}

async function initialize(){
    let viewedArticles = [];
    try{
        viewedArticles = JSON.parse(GM_getValue("articles"));
    }catch(e){
        GM_setValue("articles", JSON.stringify([]));
    }
    let currentArticles = Array.prototype.slice.call( document.getElementsByTagName("article"));
    currentArticles.forEach(async function(article) {
        getArticleThemes(article);
        if(viewedArticles.includes(article.getElementsByTagName("a")[0].href)){
            article.style.backgroundColor='green';
        }
        else{
            article.style.backgroundColor='red';
        }
    });
}

window.addEventListener('load', function() {
    initialize();
}, false);

window.addEventListener('click',function(e){
    saveArticleView(e.toElement);
    alert("Guardando la nota");
}, false);