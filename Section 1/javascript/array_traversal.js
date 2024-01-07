// const nums = [3, 7, 9, 4, 7, 1, 5];

// for(let i =0; i<nums.length; i++){
//   console.log(nums[i]);
// }

// console.log("------------------");
// for(let n of nums){
//   console.log(n);
// }


// console.log("-------------------");

// nums.forEach((a) => {console.log(a); });

// // let find 5

// for (let i = 0; i<nums.length; i++){
//  if(i === 5){
//   console.log('found [5]')
//  }
// }

// // Map function

//  let newArr = nums.map((i) => {return i**2 });
//  console.log(newArr);

//  const prices = [20, 46, 600, 7440, 1800, 2440,2840];
//  let newprices = prices.map( (i) => {return i-i/10 });
//  console.log(newprices);

//  const names =['raju', 'ramu', 'kaliya', 'shamu'];
//  let newnames = names.map((i) => {return i.toUpperCase()});
//  console.log(newnames);

// //  filter function

// const AllPrices = [23000, 4600, 8570, 1200, 1433, 649, 4945, 200];
// // filter all prices which are greater than 2000
// const  budgetPrices = AllPrices.filter((p) => {return p>2000});
// console.log(budgetPrices);

// const budprices = prices.filter((p) => {return p>2000 && p<5000});
// console.log(budprices);

// wap to filter all even numbers from an array.
let num = [3, 6, 7, 12, 18, 23, 44, 62, 81, 65, 98, 65, 25, 44, 77, 87];
let even_num = num.filter(function(n){return n % 2 === 0});
console.log(even_num);

// wap to filter all name that have length greater then 5 from an array of names.

const arr1 = ["tanveer", "shafia", "brock", "cena", "shabana"];

const check = arr1.filter((name) => name.length > 5);
console.log(check);

console.log('raju rastogi'.split('')[0]);


  