// // const product={
// //     name:"Parker",
// //     rating:5,
// //     price:456

// // };
// // console.log(product);
// // let a=5;
// // let b=2;
// // console.log("a+b=",a+b);
// // console.log(a*b);
// // console.log(a/b);
// // console.log(a%b);
// //let a=5;
// //console.log(a++,a++,a--,a--);//5,6,7,6
// //Assignment operators
// //let a=5;
// //let b= 2;
// //a+=4;
// //a-=4;
// //a*=4;
// //a**=4;
// //console.log(a);
// //comparison operators
// //let a=5;//number
// //let b="5";//string->number
// //console.log(a==b);//false,true
// //console.log(a!=b);//true

// //console.log("a===b",a===b);//false
// //console.log("a!==b",a!==b);//true
// //logical operators
// let a=6;
// let b= 5;
// let cond1= a>b;//true
// let cond2=a===b//true
// console.log(cond1&&cond2);//false
// console.log(cond1||cond2);//true
// let age=25//25;
// if(age>18){
//     console.log("you can vote");//25
// }
// if(age<18){
//     console.log("you cannot vote");//16
// }else{
//     console.log("enter valid age");
// }
//if else statement & if else-if statement
 /*let num =10;
if(num%2===0){
console.log("num is even");
}else{
    console.log("num is odd");//21
}*/
/*let mode="blue";
let color;
if(mode==="dark"){
    color="black";
}else if (mode==="blue"){
    color="blue";
}else{
    color="white";
}
console.log(color);*/
//ternary operator
/*let age=25;
let res=age>=18?"adult":"not adult";
console.log(res);*/
 
//for(let i= 1; i<=10;i++){
  //  console.log("i= ",i);
//}
// let i=1;
// while (i<=9) {
//     console.log("i= ",i);
//     i++;
    
// }
// let i=1;
// do{
//     console.log("i= ",i);
//     i++;
    
// }while(i<=5);

// for- of loop 
// let  str="ApnaCollege";
// for(let i of str){
//     //iterator-> characters 
//     console.log(i);
// }
//for-in loop
// let student={
//     name:"Rahul",
//     age:20,
//     cgpa:7.5
// };
// for(let i in student){
//     console.log(i);
// }

// //Ques 2
// let gameNum=25;
// let userNum=prompt("Guess the numberr : ");
// while (userNum != gameNum) {
//     userNum=prompt("you entered wrong number");

    
// }
// console.log("Right num");

 
//Strings 
//let str1='Abhishek';
//let str2= "Abhi";
//console.log(str1.length);
//console.log(str1[o]);

//template literals 
// let specialString =`This is a template ${1+5+7}`;
// console.log(specialString);
//  let str= "123456";
//  console.log(str.slice(1,4));
// let str= "Abhishek";
// console.log(str.replace("h","m"));
// Arrays in Java Script
let marks=[96,89,85,74,89];
// console.log(marks);
// console.log(marks[0]);
// let sum=0;
// for(let i =0; i<marks.length;i++ ){
//     console.log(marks);
// }

// for (let val of marks) {
//     sum= sum+val;
// }
// let avg =sum/marks.length;
// console.log(`avg marks of student = ${avg}`);
// console.log(marks.push(2));
// console.log(marks);
// console.log(marks.pop(2));
// console.log(marks);
// console.log(marks.toString());
//Functions in Java Script

// function myFun() {
//     console.log("Abhishek");
//     console.log("Singh");
    
// }
// // myFun();
// function greetWay(msg) {
//     console.log(msg);
    
// }
// // greetWay("Namste");
// function sum(a,b) {
//     console.log(a+b);
    
// }
// sum(5,7);
//  function sum(a,b) {
//     //local variables 
//     s=a+b;
//     return s;
    
//  }
//  let val=sum(5,2);
//  console.log(val);
// Arrow function

// const sum=(a,b)=>{
//     s=a+b;
//     return s;
// }
// let val=sum(2,3);
// console.log(val);
// function countVovels(str){
// let count =0;
//     for(const char of str){
//        if (char==="a"||char==="e"||char==="i"||char==="o"||char==="u") {
//         count++;
        
//        }
//     }
//     return count;
// }
// fpr each loop
// let arr = [1,2,3,4,5];
// arr.forEach((val)=>{
//     console.log(val);
// })//output 1
// first.js:192 2
// first.js:192 3
// first.js:192 4
// first.js:192 5
// Map Method it is similar to foreach 
// let num=[12,13,14];
// num.map((val)=>{
//     console.log(val);
// });

// let newArr=num.map((val)=>{
//  return val*2;
// });
// console.log(newArr);
//filter()
// let arr=[12,14,15,19];
// let evenArr=arr.filter((val)=>{
//     return val%2===0;
// });
// console.log(
//     evenArr
// );
// console.log("Hello");
// window.console.log("Hello2");
// console.dir(document.body);
// let div= document.getElementById("div1");
// console.dir(div);
//Reduce method
// const array1= [1,2,3,4];
// const initialValue =0;
// const sumWithInitial = array1.reduce(
//     (accumulator,currentValue)=>accumulator+currentValue,initialValue,
// );
// console.log(sumWithInitial);
//  let div= document.querySelector("div");
// console.log(div);
// let id= div.getAttribute("id");
//  console.log(id);
// console.log(div.setAttribute( "div","box1"));
//  let div= document.querySelector("div");
//  div.style.backgroundColor="purple";
//  div.style.fontSize="25px";
//  div.innerHTML="hello";
// let newBtn= document.createElement("button");
// newBtn.innerText="click me!";
// console.log(newBtn);
// let div = document.querySelector("div");
// div.append(newBtn);
//div.prepend(newBtn);
//div.before(newBtn);
// div.after(newBtn);

// let newHeading = document.createElement("h1");
// newHeading.innerText="I am new";
// document.querySelector("body").prepend(newHeading);
// newHeading.remove();
// events in java script
let button = document.querySelector("#mode");
// button.onclick = ()=>{
//     console.log("Button was clicked");
//     let a= 25;
//     a++;
//     console.log(a);
// };

//  button.addEventListener("click",()=>{
//     console.log("clicked");
//  })
//  button.removeEventListener("click",()=>{
//     console.log("clicked");
// //  })
// create a toggle buttn that changes the screen to dark mode when clicked and light mode
// when clicked again ?
// let cuurMode= "light";

// button.addEventListener("click",() =>{
//     if (cuurMode === "ligth"){
//         cuurMode = "dark";

//     }else{
//         cuurMode="light";

//     }
//     console.log(cuurMode);
// });
// Classes And Objects

// const student= {
//     name:"Abhi",

//     marks:63,
//     printMarks: function(){
//         console.log("marks = ",this.marks );
//     } 
// }
// const  employee ={
// calcTax(){("Tax rate is 10%");
// },
// }

// const kA ={
//     salary:50000,

// }
// kA.__prototype__= employee;
// classes in java script

// class Car{
//     start(){
//         console.log("Car starts");
//     }
//     stop(){
//         console.log("Car stops");
//     }

//     setBrand (brand){
//         this.brandName= brand;

//     }


// }
// let fortuner = new Car();
// fortuner.setBrand("Fortuner");
// let alto = new Car();

// class Parents {

//     hello(){
//         console.log("Hello");
//     }
// }
//  class Child extends Parents{


    
//  }
//  let obj = new Child();

// class Person {


//     constructor(){
//         this.species = "homo sap"
//     }

//     eat(){
//         console.log("Eating");
//     }
   
// }

// class Engineer extends Person{
//     constructor(branch){
//         super();// to invoke parent class constructor  
//         this.branch=branch; 
//     }
//     work (){
//         console.log("Working");
//     }
// }

// let Abhi = new Engineer("cs branch");

// Advanced Java Script( Async await>> promise chains>> callback hell)
//  console.log("one");
//  console.log("two");
// console.log("three");

// function hello (){
//     console.log("Hello");
// }
// setTimeout(hello, 3000); //timeout
//callback function
// function sum(a,b){
//     console.log(a+b);
// }

// function calculator(a,b, sumCallback){

//     sumCallback(a,b);

// }

// calculator(1,2,sum);
// function getData(dataId ){
//     console.log("data",dataId);
// }
//  function getData(dataId,getNextData){
//     //2s
//     setTimeout(()=>{
//         console.log("data",dataId);
//         if(getNextData){
//             getNextData();

//         }
       
//     },2000);
//  }
// callback hell
//  getData(1,()=>{
//     getData(2,()=>{
   // getData(3)

//  });
//Promises
// const getPromise = ()=>{
//     return new Promise((resolve,reject) =>{
//         console.log("I am promise");
//        // resolve("Success");
//        reject("Error");
//     });
// }
// let promise = getPromise();
// promise.then(() =>{
//     console.log("promise fulfilled");
// })

// promise.catch(()=>{
//     console.log("Rejected");
// })

// function getData(dataId,getNextData){
//     return new Promise((resolve,reject)=>{
//         setTimeout(() =>{
//             console.log("data",dataId);
//             resolve("success");
//             if(getNextData){
//                 getNextData();
//             }
//         },3000);
//     });
// }
// function asyncFunc(){
//     return new Promise ((resolve,reject)=>{
//         setTimeout(()=>{
//             console.log("data1");
//             resolve("success");
//         },2000);
//     });
// }
// function asyncFunc2(){
//     return new Promise ((resolve,reject)=>{
//         setTimeout(()=>{
//             console.log("data2");
//             resolve("success");
//         },2000);
//     });
// }
// console.log("Fetching data1");
// let p1= asyncFunc();
// p1.then((res)=>{
//     console.log(res);
//     console.log("Fetching data2");
//     let p2= asyncFunc2();
// p2.then((res)=>{
//     console.log(res);
// });
// });
//ASYNC AND AWAIT
//  fetch  API
  

// const getFacts= async ()=>{
//     console.log("Getting Data...");
//     let response= await fetch(URL);
//     console.log(response);// JSON format
//    let data=   await response.json();
//     console.log(data);
//     factPara.innerText = data[0].text;

// };

// function getFacts(){
//     fetch(URL)
//     .then((response)=>{
//         return response.json();
//     })
//     .then((data)=>{
//         console.log(data);
//         factPara.innerText = data[2].text;
//     });
// }





// btn.addEventListener("click", getFacts)