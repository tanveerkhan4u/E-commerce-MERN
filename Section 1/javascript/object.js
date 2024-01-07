const user = {name : 'tanveer', rollno : 1804047, email : 'tanveer@mail.com'};

console.log(user.rollno);
console.log(user['name']);
console.log(user.email);

user.location = 'lucknow';
user.name = 'raju rastogi';

console.log(user);

user.subjects = ['math', 'physics', 'chemistry', 'english'];

console.log(user);

const smartphone = {brand : 'apple', model : 'iphone15', price : 52000, colors : ['yellow','black','red'] };
console.log(smartphone.brand);
console.log(smartphone.model);
console.log(smartphone.price);
console.log(smartphone.colors);

smartphone.price = 80000;
console.log(smartphone);
smartphone.colors[1] = 'white'
console.log(smartphone);
console.log('---------------------------------');
const phonelist = [
  { brand : 'oneplus', model : '11r', price : 45000, colors : ['blue','black','red'] },
  { brand : 'apple', model : 'iphone 14', price : 70000, colors : ['black','red'] },
  { brand : 'nokia', model : '3310', price : 1200, colors : ['grey','white','black'] },
  { brand : 'xiami', model : '12pro', price : 34000, colors : ['blue','yellow'] },
  { brand : 'vivo', model : 't1', price : 56000, colors : ['red','black'] },
];

console.log(phonelist[0].price);
console.log(phonelist[0].colors[2]);
phonelist[2].colors[1] = 'blue';

console.log('--------------------------------------');

for(let phone of phonelist){
  console.log(phone.brand);
  console.log(phone.colors);
}

const brands = phonelist.map((phone) => {return phone.colors});
console.log(brands);


const colorlist = phonelist.map((phone) => {return phone.colors});
console.log(new Set(colorlist.flat()));

const laptop = {brand : 'apple', model : 'macbook pro m1', price : 150000};
delete laptop.price
console.log(laptop);






