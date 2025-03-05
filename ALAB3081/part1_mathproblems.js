// pick four numbers 
const num1 = 10;
const num2 = 15;
const num3 = 20;
const num4 = 5;

// checking the results

// if they add up to 50
const sumCheck = (num1 + num2 + num3 + num4) === 50;

// are any numbers odd 
const oddCheck = (num1 % 2) + (num2 % 2) + (num3 % 2) + (num4 % 2) >= 2;

// are any number under 25
const under25Check = num1 <= 25 && num2 <= 25 && num3 <= 25 && num4 <= 25;

// if all number are diff
const uniqueCheck = num1 !== num2 && num1 !== num3 && num1 !== num4 && 
                    num2 !== num3 && num2 !== num4 && num3 !== num4;

// are num dis by 5
const divisibleBy5Check = (num1 % 5 === 0) && (num2 % 5 === 0) && 
                          (num3 % 5 === 0) && (num4 % 5 === 0);

// checking if first is biggest than last
const firstBiggerCheck = num1 > num4;

// math operation
const mathResult = ((num2 - num1) * num3) % num4;

// final math result output
console.log(`Do the numbers add up to 50? ${sumCheck}`);
console.log(`Are at least two numbers odd? ${oddCheck}`);
console.log(`Is every number 25 or less? ${under25Check}`);
console.log(`Are all numbers different? ${uniqueCheck}`);
console.log(`Are all numbers divisible by 5? ${divisibleBy5Check}`);
console.log(`Is the first number bigger than the last? ${firstBiggerCheck}`);
console.log(`Result ${mathResult}`);
