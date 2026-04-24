/*
js function that takes two numbers and operator
using arrow function
*/

// const simpleCalculator=(a,b,op)=>{

// }

function simpleCalculator(a, b, operator) {
  switch (operator) {
    case "+":
      return a + b;
    
    case "-":
      return a - b;
    case "*":
      return a * b;
    case "%":
      return a % b;
    case "/":
      if (b !== 0) {
        return a / b;
      } else {
        return "Divisor Error , b must be different from zero";
      }
    default: 
      return "Please choose valid operator";
  }
}
///call function
console.log(simpleCalculator(40,2,'+'));
