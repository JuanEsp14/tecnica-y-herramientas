
/*
function f1 (){setTimeout(()=>{console.log("--> f1")},700)};
function f2 (){setTimeout(()=>{console.log("--> f2")},400)};
function f3 (){setTimeout(()=>{console.log("--> f3")},100)};

f1();
f2();
f3();

setTimeout(() =>{console.log("fin")},2000);
*/
/********************************************
Codigo asincrono + sincrono.
*/
/*
function f1 (){
    setTimeout(()=>{console.log("--> f1")}, 300);
};
function f2 (){
    setTimeout(()=>{console.log("--> f2")},300)
};
function f3 (){
    setTimeout(()=>{console.log("--> f3")},300)
};
function B(){
    console.log("B");
    for (var i =0; i < 10000000; i++){
        let a = "Hola mundo";
    }
    console.log("B.");
}

f1();
f2();
f3();

function A(){
    console.log("A");
    for (var i =0; i < 10000000000; i++){
        let a = "Hola mundo";
    }
    B();
    console.log("A.");
}




setTimeout(() =>{console.log("fin")},2000);

A();
*/
/********
 * Callbacks nesting
 */
/*
function f1 (){setTimeout(()=>{console.log("--> f1"); f2();},3000)};
function f2 (){setTimeout(()=>{console.log("--> f2"); f3();},30)};
function f3 (){setTimeout(()=>{console.log("--> f3")},7000)};
f1();
setTimeout(() =>{console.log("fin")},2000);
*/
/********************************************
Promises.all
*/
/*
p1 = new Promise((resolve, reject) =>{
  setTimeout(function(){
     resolve(Math.random() * 1000);
  }, 5000);
});
 
p2 = new Promise((resolve, reject) =>{
  setTimeout(function(){
    resolve(Math.random() * 1000);
  }, 1000);
});
 
p3 = new Promise((resolve, reject) =>{
  setTimeout(function(){
     resolve(Math.random() * 1000);
  }, 600);
});
 
Promise.all([p1,p2,p3]).then(values => console.log(values));
*/
/********************************************
Promises chaining
*/

function randomWithDelay(ms){
  return new Promise((resolve,reject) => {setTimeout(
       () => {
           const val = Math.trunc(Math.random() * 100);
           console.log("VAL: " + val)
           if  (val > 100){
             reject(new Error("Error forzoso"));
           }
           resolve(val);
          }, ms
       )}
  )
}
randomWithDelay()
    .then(value1 => randomWithDelay()
      .then(value2 => randomWithDelay()
        .then(value3 => console.log(value3 + value2 + value1))
      )
    );

console.log("a");

console.log("fin del script");
