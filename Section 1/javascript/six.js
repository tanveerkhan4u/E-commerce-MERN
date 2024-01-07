// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// const newnums = mynumbers.map((n) => {return n + 10})
// console.log(newnums);

// let evennumber = numbers.filter((n) => {return n % 2 == 0});
// console.log(evennumber);

// const numbers = [-3, -2, -1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// const oddnum = numbers.filter((n) => {return n % 2 !== 0 });
// console.log(oddnum);


// wap to filter all name that have length greater then 5 from an array of names.

//  const names = ["tanveer", "khursheed", "cena", "brock", "undertaker"];

//  const result = names.filter((n) => {return n.length > 5});
//  console.log(result);


// reduce functions  

// const numbers = [1, 2, 3];

// const mytotal = numbers.reduce(function(accumulator, currentvalue) {return accumulator + currentvalue}, 0);
// console.log(mytotal);

// const num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// const mytotal = num.reduce((accumulator,currentvalue) => {return accumulator + currentvalue}, 0);
// console.log(mytotal);


// const shoppingcart = [
//   {
// itemname: "js course",
// Price: 2999
// },
// {
//   itemname: "python course",
//   Price: 9999
//   },
//   {
//     itemname: "mobile development course",
//     Price: 85999
//     },
//     {
//       itemname: "react course",
//       Price: 29995
//       },
//       {
//         itemname: "js course",
//         Price: 2999
//         },
// ]

// const mytotal = shoppingcart.reduce((accumulator, itemname) => {return accumulator + itemname.Price}, 0);
// console.log(mytotal);

// let arr3 = [5, 5, 7, 5, 8, 9, 6, 4, 3, 2, 90];

// let mytotal = arr3.reduce((accumulator,currentvalue) => {return accumulator + currentvalue }, 0);
// console.log(mytotal);

// let arr = [1, 2, 3, 4, 5, 6];
// sum = 12
// average = 4 
// product = 30

// mytotal = arr.reduce((accumulator,currentvalue) => {return accumulator + currentvalue}, 0);
// console.log(mytotal);

// filter function practice 

// let arr = [2, 22, 13, 5, 6, 61, 23, 7];

// let result = arr.filter((num)=> {return num > 10});
// console.log(result);

// let team = [
//   {
//     name: "tanveer",
//     position: "developer", 
//   },
//   {
//     name: "muttu",
//     position: "ui designer", 
//   },
//   {
//     name: "shafia",
//     position: "developer", 
//   },
//   {
//     name: "faiq",
//     position: "contact manager", 
//   },
//   {
//     name: "dr jackal",
//     position: "engineer", 
//   },
// ]

// let object = team.filter((value) => {return value.position === "developer"});
// console.log(object);

// const ages = [10, 15, 8, 9, 20, 54, 16, 19, 24];

// const checking_age = ages.filter((adult) => {return adult >= 18});
// console.log(checking_age);

// const users = [
// {
//   id: 1,
//   name: "tanveer",
//   isActive: true,
//    age: 24
// },
// {
//   id: 2,
//   name: "shafia",
//   isActive: true,
//    age: 24
// },
// {
//   id: 3,
//   name: "shabana",
//   isActive: true,
//    age: 22
// },
// {
//   id: 4,
//   name: "badrey",
//   isActive: false,
//    age: 55
// },
// {
//   id: 5,
//   name: "roman",
//   isActive: false,
//    age: 75
// },
// ]

// const checking = users.filter((name) => {return name.isActive});
// console.log(checking);


// const arr1 = ["tanveer", "shafia", "brock", "cena", "shabana"];

// const check = arr1.filter((name) => name.length > 5);
// console.log(check);

// map function practice

// const names =['raju', 'ramu', 'kaliya', 'shamu'];
//  let newnames = names.map((i) => {return i.toUpperCase()});
//  console.log(newnames);

// let arr = [2, 3, 4, 5, 6];

// let mynum = arr.map((num) => {return num * 2});
// console.log(mynum);

// const names = ['RAJU', 'RAMU', 'KALIYA', 'SHAMU'];

// const value = names.map((i) => {return i.toLowerCase()});
// console.log(value);

// const arr1 = [2, 6, 7, 5, 6, 4, 5];
 
// const value = arr1.map((num)=> {return num * 2});
// console.log(value);

// const coding = ["js", "ruby", "java", "python", "cpp"];

// const course = coding.map((i) => {return i.toUpperCase()});
// console.log(course);

// functions in javascript

// function addtwonumbers(number1,number2){
//   console.log(number1 * number2);
// }

// addtwonumbers(789654123,536)

// function song (name){
//   console.log(name);
// }
// song("happy birthday to you....")


// function song(){
// console.log("happy birthday to you...");
// }
// song();                                