const numbers=[29, 23, 24, 40, 96,100]; // spread operator
console.log(numbers);
console.log(...numbers);

const max=Math.max(38,29, 300, 24, 40); //finding max
const maxArray=Math.max(...numbers); // finding max from an array
console.log(maxArray);

const numbers2=[numbers] // two dimenstional array
numbers.push(10);
console.log(numbers2);

const numbers2=[...numbers];              // creating new array;
// const numbers2=[99,...numbers, 15];     // creating new array and adding num directly
numbers.push(55);                       // push in old array;
console.log(numbers);      
console.log(numbers2);



