// ASSESSMENT 6: JavaScript Coding Practical Questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest

// --------------------1) Create a function that takes in an array of objects and returns an array with a sentence about each person with their name capitalized.

// a) Create a test with an expect statement using the variable provided.

const people = [
  { name: "ford prefect", occupation: "a hitchhiker" },
  { name: "zaphod beeblebrox", occupation: "president of the galaxy" },
  { name: "arthur dent", occupation: "a radio employee" }
]
const peopleOutput = 
["Ford Prefect is a hitchhiker.", 
"Zaphod Beeblebrox is president of the galaxy.", 
"Arthur Dent is a radio employee."
]
// Expected output: ["Ford Prefect is a hitchhiker.", "Zaphod Beeblebrox is president of the galaxy.", "Arthur Dent is a radio employee."]

describe("career", () => {
  it("takes in an array of objects and returns an array with a sentence about each person with their name capitalized.", () => {
    expect(career(people)).toEqual(peopleOutput)
  })
})

// ReferenceError: career is not defined
 
// b) Create the function that makes the test pass.


// Attempts//
// const career = (array) =>{
//   return array.map(object.name => {
//     return object.name.charAt(0).toUpperCase() + object.name.slice(1).toLowerCase();
//       return '${object.name} is ${object.occupation}'
//   })
// })

// const career= (array) =>{
//   for(var i = 1 ; i < newArr.length ; i++);
//   return array.map(object)=>{
    
//     return object.name.charAt(0).toUpperCase() + object.name.slice(1) join!!
// return '${object.name} is ${object.occupation}'
//   }

// I could only figure out how to cap the first letter, not both first letters. I knew to map over, split, and join. I first had trouble accessing the object, but read online and in the syllabus how to do. 

//     const career= (array) =>{
//       for(var i = 1 ; i < array.length ; i++);
//     let words = object.name
//     .split(" ");
//     .map((object) => word.charAt(0).toUpperCase() + word.slice(1))
//     .join("")
//   return '${object.name} is ${object.occupation}'
// }


// Create a function named career that takes in an array
const career = (array) => {
  // .map over the array to get into the object. Use the .split method to divide the object.name with a space, and will create a new array using the object.name string. 
  return array.map((object) => `${object.name.split(" ").map((name) => 
  // Than use the .slice method, with will return a portion of an array into a new array object. The original array wont be changed. So use .slice to cut and take out the first character of the first and last .name and use .Uppercase, to capitalize them. Than bring it all together using .join to return the string. 
  name.slice(0, 1).toUpperCase() + name.slice(1)).join(" ")} is ${object.occupation}.`
  )}

//   PASS  ./code-challenges.test.js
//   career
//     ✓ takes in an array of objects and returns an array with a sentence about each person with their name capitalized. (2 ms)

// Test Suites: 1 passed, 1 total
// Tests:       1 passed, 1 total
// Snapshots:   0 total
// Time:        0.519 s, estimated 1 s
// Ran all test suites.
// ✨  Done in 1.57s.

// --------------------2) Create a function that takes in a mixed data array and returns an array of only the REMAINDERS of the numbers when divided by 3.

// a) Create a test with an expect statement using the variables provided.

const hodgepodge1 = [23, "Heyyyy!", 45, -10, 0, "Yo", false]
// Expected output: [ 2, 0, -1, 0 ]
const hodgepodge2 = [5, "Hola", 43, -34, "greetings", true]
// Expected output: [ 2, 1, -1 ]

describe("random", () => {
  it("takes in a mixed data array and returns an array of only the REMAINDERS of the numbers when divided by 3.", () => {
    expect(random(hodgepodge1)).toEqual([ 2, 0, -1, 0 ])
    expect(random(hodgepodge2)).toEqual([ 2, 1, -1 ])
  })
})

// ReferenceError: random is not defined

// b) Create the function that makes the test pass.

// Create a function that takes in an array
const random = (array) =>{
  // / return a higher-order function that takes in the value. Use type of to compare if it is a number. Than use the .map, built in method to access what was filtered in the array to do logic. It will return only the array numbers when divided by 3
return array.filter(value=> typeof value === 'number')
.map (value => value % 3)};


// PASS  ./code-challenges.test.js
// random
//   ✓ takes in a mixed data array and returns an array of only the REMAINDERS of the numbers when divided by 3. (22 ms)

// Test Suites: 1 passed, 1 total
// Tests:       1 passed, 1 total
// Snapshots:   0 total
// Time:        3.905 s
// Ran all test suites.
// ✨  Done in 16.29s.

// --------------------3) Create a function that takes in an array of numbers and returns the sum of all the numbers cubed.

// a) Create a test with an expect statement using the variables provided.

const cubeAndSum1 = [2, 3, 4]
// Expected output: 99
const cubeAndSum2 = [0, 5, 10]
// Expected output: 1125

describe("cubed", () => {
  it("takes in a mixed data array and returns an array of only the REMAINDERS of the numbers when divided by 3.", () => {
    const cubeAndSum1 = [2, 3, 4]
    const cubeAndSum2 = [0, 5, 10]
    expect(cubed(cubeAndSum1)).toEqual(99)
    expect(cubed(cubeAndSum2)).toEqual(1125)
  })
})

// ReferenceError: cubed is not defined

// b) Create the function that makes the test pass.

const cubed = (array) =>{
  // Create a function name cubed that takes in an array 
  // Set a new variable sum to be intialized to 0
  let sum = 0;
  // Use a for loop. This will set the index to 0; than if the string is less than the length in the text variable than perform the code; than add 1 to the index; do it until i is greater than the string length, than stop. 
  for (let i = 0; i < array.length; i++) {
    // Than returns the sum of all the numbers cubed, by taking the array, use the ** symbol and put 3 after so that the numbers are all cubed (multiplied by its by itself 3 times), and than add them together.
    sum += array[i] ** 3;
  }
  return sum;
}

// PASS  ./code-challenges.test.js
// cubed
//   ✓ takes in a mixed data array and returns an array of only the REMAINDERS of the numbers when divided by 3. (6 ms)

// Test Suites: 1 passed, 1 total
// Tests:       1 passed, 1 total
// Snapshots:   0 total
// Time:        3.84 s
// Ran all test suites.
// ✨  Done in 11.73s.
