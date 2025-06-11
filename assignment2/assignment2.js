// //1. Display Even Numbers from 1 to 100



console.log("Even numbers from 1 to 100:");

for (let i = 1; i <= 100; i++) {
  if (i % 2 === 0) {
    console.log(i);
  }
}




//2. Calculator Function with switch for +, −, ×, ÷



export function calculate(num1, num2, operator) {
  let result;

  switch (operator) {
    case "+":
      result = num1 + num2;
      break;
    case "-":
      result = num1 - num2;
      break;
    case "*":
      result = num1 * num2;
      break;
    case "/":
      result = num2 !== 0 ? num1 / num2 : "Cannot divide by 0";
      break;
    default:
      result = "Invalid operator";
  }

  return result;
}
console.log(calculate(10, 5, "+")); 
console.log(calculate(10, 5, "*"));

//3. findTax() Function Using switch

function findTax(salary) {
  let taxRate;

  switch (true) {
    case (salary > 0 && salary <= 500000):
      taxRate = 0;
      break;
    case (salary > 500000 && salary <= 1000000):
      taxRate = 0.10;
      break;
    case (salary > 1000000 && salary <= 1500000):
      taxRate = 0.20;
      break;
    case (salary > 1500000):
      taxRate = 0.30;
      break;
    default:
      console.log("Invalid salary amount");
      return;
  }

  const tax = salary * taxRate;
  console.log("Salary:", salary);
  console.log("Tax Rate:", taxRate * 100 + "%");
  console.log("Tax Amount:", tax);
}

//4. Sum of Products of Corresponding Digits


function sumOfProducts(n1, n2) {
  let str1 = n1.toString().split("").reverse();
  let str2 = n2.toString().split("").reverse();

  let length = Math.max(str1.length, str2.length);
  let sum = 0;

  for (let i = 0; i < length; i++) {
    let digit1 = parseInt(str1[i] || 0);
    let digit2 = parseInt(str2[i] || 0);
    sum += digit1 * digit2;
  }

  return sum;
}

// Example usage:
console.log(sumOfProducts(6, 34)); 
// (6*4)+(0*3) = 24


