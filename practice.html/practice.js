//1ways to print in javascript
//console.log("hello world");
//alert("me");
// document.write("this is a doc write");

// 2. javascript console API
// console.log("hello world", 4 + 6);
// console.warn("this is a warning");
// console.error("this is a error");

//3.javascript variables
// what are variables? > containers to store data values
var number1 = 34;
var number2 = 56;
// console.log(number1+number2);

//4. data types in javaScript
//strings
var str1 = "this is string";

//objects
var marks = {
    ravi: 23,
    shastri: 45,
    harry: 69.56
}
// console.log(marks)
//booleans
// var a= true;
// var b = false;
// console.log(a ,b)

var und = undefined;
console.log(und)

var n = null;
//console.log(n) 
// at a very high level, there are two types of datatypes in javaSCript
// 1. primitive datatypes: undefined,null,number,string,boolean,symbol
// 2. reference data types: arrays and objects
var arr = [1, 2, "string", 3, 4, 5]
//arithmetic operators
var a = 100;
var b = 56;
//console.log("the value of a+b is",a+b);
//console.log("the value of a+b is",a*b);

//assignment operators
var c = b;
// c-=2; // c=c-2;
// console.log(c);
//comparision operators
var x = 34;
var y = 56;
// console.log(x==y);
// console.log(x<=y);
// console.log(x<y);

//logical operators


//and operator

// console.log(true && true)
// console.log(true && false)
// console.log(false && false)
// console.log(false && true)

// OR operator

// console.log(true ||  true)
// console.log(true || false)
// console.log(false  ||false)
// console.log(false || true)

//logical not
// console.log(!true);
// console.log(!false);

//fun ctions in javaScript
//DRY= do not repeat yourself
function avg(a, b) {
    return (a + b) / 2;

}
c1 = avg(4, 6);
c2 = avg(14, 1);
// console.log(c1,c2);

//conditionals in javaScript
/*var age=3;
//if-else statements
// if (age>18){
//     console.log('you can drink rasna water' )

// }
// else{
//     console.log('you can not drink rasna water')

// }

//if-else ladder
if (age>18){
    console.log('you can drink rasna water' )
}
else if(age>26){
    console.log('bache nahi rahe')
    
}
else{
    console.log("ohh yeahh")
}
*/
// var arr = [1, 2, 3, 4, 5, 6, 7]
// // console.log(arr);
// for(var i =0; i<arr.length;i++){
//     if(i==2){
//         //break
//         continue;
//     }
//      console.log(arr[i])
//  }

// arr.forEach(function(element){
//     console.log(element);   
// })

//const ac=0;
//ac++;
//ac=ac+1;
// let j = 0;
// while (j<arr.length){
//     console.log(arr[j]);
//     j++;
// }

// do{
//     console.log(arr[j]);
//     j++;
// }while (j < arr.length);

// let myArr = ["fan","Camera", 34,null,true];
//array methods
//console.log(myArr.length);
//myArr.pop()
//myArr.push("harry")
//myArr.shift()
//console.log(myArr.unshift("hary"))
//console.log(myArr); 
// const newLen = myArr.unshift("hary")
// console.log(newLen);


//string methods in JavaScript
let mystring = "harry is  nice is is";
// console.log(mystring.length)
// //console.log(mystring.indexOf("is"));
// console.log(mystring.lastIndexOf("is"));
//console.log(mystring.slice(1,3))
// d = mystring.replace("harry","rohan")
// console.log(d,mystring)

// let myDate= new Date();
// console.log(myDate.getTime());
// console.log(myDate.getFullYear());
// console.log(myDate.getDay());
// console.log(myDate.getHours());

//DOM manipulation
let ele = document.getElementById("click");
// console.log(ele);
let ele1 = document.getElementsByClassName("container");
//console.log(ele1);
//ele1[0].style.background="yellow";
ele1[0].classList.add("bg-primary");
ele1[0].classList.add("textsuccess");
// console.log(ele1[0].innerHTML);
// console.log(ele1[0].innerText);
// tn = document.getElementsByTagName('div')
// console.log(tn);
// createdElement = document.createElement('p');
// createdElement.innerText = "this is a created para";
// tn[0].appendChild(createdElement);
// createdElement2 = document.createElement('b');
// createdElement2.innerText = "this is a created bold";
// tn[0].replaceChild(createdElement2, createdElement);
// removeChild(element); ---> removes an element

// selecting using query
// sel = document.querySelector('.container')
// console.log(sel)
// sel1 = document.querySelectorAll('.container')
// console.log(sel1)

// function clicked() {
//     console.log('The button was clicked')}

// window.onload = function(){
    //console.log('the document was loaded')
// }
// Events in javascript

// firstContainer.addEventListener('click', function(){
//     document.querySelectorAll('.container')[1].innerHTML ="<b> we have clickes </b>"
//     console.log("clicked on container");
// })
// firstContainer.addEventListener('mouseover', function(){
//     console.log("mouse on container");
// })
// firstContainer.addEventListener('mouseout', function(){
//     console.log("mouse out container");


// function summ(a,b){
//     return a+b ;
// }
summ = (a,b)=>{
    return a+b;
}



 



