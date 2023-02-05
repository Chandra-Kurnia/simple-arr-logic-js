const arr = [12,9,30,"A","M",99,82,"J","N","B"]

const numbers = arr.filter(element => !isNaN(element)).sort();
const strings = arr.filter(element => isNaN(element)).sort();

const sortedArr = [...strings, ...numbers]

console.log(sortedArr)