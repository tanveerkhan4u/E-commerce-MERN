const phonelist = [
  { brand : 'oneplus', model : '11r', price : 45000, colors : ['blue','black','red'] },
  { brand : 'oneplus', model : 'nord 2', price : 70000, colors : ['black','red'] },
  { brand : 'nokia', model : '3310', price : 1200, colors : ['grey','white','black'] },
  { brand : 'xiami', model : '12pro', price : 34000, colors : ['blue','yellow'] },
  { brand : 'vivo', model : 't1', price : 56000, colors : ['red','black'] },
];

// const budgetphones = phonelist.filter((phone) => {return phone.price <= 50000});
// console.log(budgetphones);

// const budgetphones = phonelist.filter((phone) => {return phone.colors.includes('red')});
// console.log(budgetphones);
const brandName = 'no'
const result = phonelist.filter((phone) => {return phone.brand.toLowerCase().includes(brandName.toLowerCase)});
const result2 = phonelist.filter((phone) => {return phone.brand.toLowerCase() === brandName.toLowerCase()});
console.log(result2);

console.log('oneplus'.includes('one'));

