// iterate 0 to 10 using for loop do the same using while and do while loop ?

for(let i = 0; i <= 10; i++){
  console.log(i)
}


let i = 0
while (i <= 10){
  console.log(i)
  i++
}


let i = 0
do {
  console.log(i)
  i++
} while (i <= 10)



// iterate 10 to 0 using for loop do the same using while and do while loop


let i = 10
while (i >= 0) {
 console.log(i);
  i--
 }


let i = 10;
do {
  console.log(i);
  i--;
} while (i >= 0);


// iterate 0 to n using for loop

let n = 10;

for (let i = 0; i <= n; i++) {
  console.log(i);
}
// series questiin


for (let i = 0; i <= 10; i++){
  console.log(`${i} X ${i} = ${i * i}`)
}

// use for the loop to iterate from 0 to 100 and print only even numbers

for (let i = 0; i <= 100; i++) {
  if (i % 2 === 0) {
    console.log(i);
  }
}

// use for the loop to iterate from 0 to 100 and print only odd numbers

for (let i = 0; i <= 100; i++) {
  if (i % 2 !== 0) {
    console.log(i);
  }
}



