// Homework Exercises

// 1. For each of these values, what type will the TypeScript compiler infer?
let a = 118;
// A: number

let b = 'Thieves';
// A: string

let c = [true, false, false];
// A: Boolean

// let d = {age: number};
// A: the problem here is that number refers to a type but it's being used as a value here, so the type inferred here will actually be { age: number }
//  Apparently you could do it like this. let d: {age: number} = {age: 42};

let e = [3]
// A: number []

let f;
// A: any

let g = []
// A: any[]



// // 2. What are the compilation errors in each of the following code snippets?
let song: {
    title: string,
    releaseYear: number,
} = {
    title: 'Lose Yourself'
};
// // A: You need to include releaseYear: 2002 after title: 'Lose Yourself

let prices = [100, 200, 300];
prices[0] = '$100';
// // A: You're trying to assign a string where there should be a number

function myFunc(a: number, b: number): number {}
// // A: This function doesn't return anything.  you have to do something with those variables, like {return a - b}


~~~~~~~~~~~~~~~~~~~~~~~~~CODE WARS~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

// Write a program that finds the summation of every number from 1 to num. The number will always be a positive integer greater than 0.

function summation(num1) {
    let total = 0;
    
    for (let i = 1; i <= num1; i++) {
      total += i;
    }
    
    return total;
  }

  console.log(summation(8));


//   Return the number (count) of vowels in the given string.

//   We will consider a, e, i, o, u as vowels for this Kata (but not y).
  
//   The input string will only consist of lower case letters and/or spaces.
  

function getCount(str) {
    let vowelsCount = 0;
    const vowels = ['a', 'e', 'i', 'o', 'u'];
  
    for (let i = 0; i < str.length; i++) {
      if (vowels.includes(str[i])) {
        vowelsCount++;
      }
    }
  
    return vowelsCount;
  }

  console.log(getCount("hello"));
  