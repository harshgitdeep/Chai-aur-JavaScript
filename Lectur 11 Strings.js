/* 
Strings in javascript

'Harsh'
"Harsh" ==> Both the syntax are correct

const name = "Harsh"
const age = 20

console.log(name + age + "Is my age")  ===> This not used now-a-days

console.log(`Hello my name is ${name} and my age is ${age}`) ===> This way of writing is known as String interpolation javascript(Moderen Way)

console.log(typeof "Harsh") // String

const str = new String("Harsh-Sing")  // Another way to delcare string 
console.log(typeof str) // object

console.log(str[0]);   // accessing the 0th key   output==>h

console.log(str.__proto__);

console.log(str.length);
console.log(str.charAt(2));
console.log(str.indexOf('a'));
console.log(str.toUpperCase); // does not change the original string (Stack memory)

*/

//ALL STRING METHODS

let str = "Hello, world!";

console.log(str.length); // Outputs the length of the string: 13
console.log(str.charAt(2)); // Outputs the character at index 2: "l"
console.log(str.indexOf('a')); // Outputs the index of the first occurrence of 'a', or -1 if not found: -1
console.log(str.toUpperCase()); // Converts the string to uppercase, doesn't change the original string:"HELLO, WORLD!"
console.log(str.toLowerCase()); // Converts the string to lowercase: "hello, world!"
console.log(str.slice(7)); // Extracts a part of the string starting from index 7: "world!"
console.log(str.substring(0, 5)); // Extracts characters from index 0 to 4: "Hello"
console.log(str.replace('world', 'planet')); // Replaces 'world' with 'planet': "Hello, planet!"
console.log(str.concat(' Have a nice day!')); // Concatenates two strings: "Hello, world! Have a nice day!"
console.log(str.trim()); // Removes whitespace from both ends of the string: "Hello, world!"
console.log(str.split(',')); // Splits the string by comma and returns an array: ["Hello", " world!"]
console.log(str.charAt(5)); // Returns the character at index 5: ","
console.log(str.charCodeAt(7)); // Returns the Unicode value of the character at index 7: 119
console.log(str.includes("world")); // Checks if the string includes "world": true
console.log(str.startsWith("Hello")); // Checks if the string starts with "Hello": true
console.log(str.endsWith("world!")); // Checks if the string ends with "world!": true
console.log(str.lastIndexOf("o")); // Returns the last index of "o": 8
console.log(str.match(/[a-zA-Z]+/g)); // Matches alphabetic characters: ["Hello", "world"]
console.log(str.padStart(20, "123")); // Pads the string at the start until length 20: "123123123Hello, world!"
console.log(str.padEnd(20, "123")); // Pads the string at the end until length 20: "Hello, world!123123123"
console.log(str.repeat(3)); // Repeats the string 3 times: "Hello, world!Hello, world!Hello, world!"
console.log(str.search("world")); // Searches for "world" and returns the index: 7

console.log(str.substr(7, 5)); // Returns substring starting at index 7 with length 5: "world"
console.log(str.substring(0, 5)); // Returns substring from index 0 to 4: "Hello"
// Difference between substring and substr methods https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/substring

console.log(str.toLocaleLowerCase()); // Converts string to lowercase based on locale: "hello, world!"
console.log(str.toLocaleUpperCase()); // Converts string to uppercase based on locale: "HELLO, WORLD!"

