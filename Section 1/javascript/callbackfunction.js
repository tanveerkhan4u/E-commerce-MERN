const prodnums = (x, y) => {
  return x*y;
}

// calling the functions

let p = prodnums(5, 6);
console.log(p);


// passing the functions

let q = prodnums;
console.log(q(5 , 6));
console.log(q(4, 3));
console.log(q(7, 17));

const printresult = (name, percentage) => {
  console.log(`result of ${name} is ${percentage}%`);

}
const createresult = (name, m1, m2, m3, m4, cb) => {
  const percentage = (m1+m2+m3+m4)/4;
  cb(name,percentage);
}
createresult('tanveer',56, 85, 54, 89, printresult);


