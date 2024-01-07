// function addnums(a, b){
// c = a + b;
// console.log(c);
// }
// addnums(45, 67);
// addnums(50, 45);
// addnums(852, 647);
// addnums(45, 57);
// addnums(45, 67);
// addnums(45, 67);
// addnums(45, 67);


// const getavg = function(m, n, o, p){
//   // console.log(m, n, o, p);checking yourself
//   let sum = m + n + o + p;
//   console.log(sum/4);
// }
// getavg(45,65,85);

// const factorial = (n) => {
//   let f = 1;
//   for(let i=2; i<=n; i++){
//     f = f*i;
//   }
//   console.log(f);
//   return f;
// };
// let ans = factorial(7);
// console.log(ans);


// wap to create a function to check if a number is prime

const primenumber = (num) => {
  if(num<2) return false;
  for(let i = 2; i<= Math.sqrt(num); i++){
    if (num % i == 0) return false;
  }
  return true;
};
console.log("result",primenumber(7));

// wap to create a function to check is a number is perfect square

const issquare = function(n) {
  return Math.sqrt(n) % 1 === 0;
}
console.log(issquare(10));

// wap to create a function to print fibonacci series
function printfibonacci(n) {
  let x = 0, y = 1, z, i;
  console.log(x);
  console.log(y);
  for(let i = 2; i < n; i++){
    z = x + y;
    console.log(z);
    x = y;
    y = z;
  }
}
printfibonacci(10);