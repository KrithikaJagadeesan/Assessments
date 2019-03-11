//-----------JavaScript Practical Assessment Week 2

// 1. Write an arrow function that takes one argument of type array and returns the contents of that array in reverse order.

var originalArray = [1, 2, 3, 4, 5, 6, 7]

const reverseArray=(arr)=>{
	return arr.reverse()
}

console.log(reverseArray(originalArray))


// 2. Given the object below, complete the console.log to find specific information:

var bicycle = {
	type: "Roadbike",
	gear: ["comfy seat", "cool handlebars", "vintage bell", "toe clips"],
	wheels: {
		count: 2,
		specs: ["road tires", "AX-7563", "80-115 PSI"],
		brand: "Trek"
	}
}

// Log the type of bicycle:
console.log(bicycle.type)

// Log the bell:
console.log(bicycle.gear[2])

// Log the PSI:
console.log(bicycle.wheels.specs[2])


// 3. Write a function called letterCounter that logs the number of times the letter "l" appears in ourString.

var ourString = "Hello Learn Students!"
var newString= ourString.toLowerCase()
var newarray=[]

const letterCounter = (str) =>{
	for(let i=0; i<str.length; i++){
		if(str[i] === 'l'){
			newarray.push(str[i])
		}
	} return newarray.length
}
console.log(letterCounter(newString));


// 4. Write a function called getFib that returns the first 10 numbers of the Fibonacci sequence in an array. [1, 1, 2, 3, 5, 8, 13, 21, 34, 55]
var getFib = (n) => {
    if (n===1)
 {
   return [1, 1]
 }
 else
 {
   var s = getFib(n - 1)
   s.push(s[s.length - 1] + s[s.length - 2])
   return s;
 }
};

console.log(getFib(9))


//5. Write a function called oddChecker that takes in the fullArr and uses a for loop to return a new array of only odd numbers. Copy and paste your code and refactor using ES6 syntax.

var fullArr = [4, 9, 0, "7", 8, true, "hey", 7, 199, -9, false, "hola"]
var newOddArray =[]
const oddChecker=(arr)=>{
	for(let i=0; i<arr.length; i++){
		if (typeof arr[i] === "number"){
			if(arr[i] % 2 !== 0){
				newOddArray.push(arr[i])
			}
		}
	} return newOddArray
}

console.log(oddChecker(fullArr))

// Another way to write the function using filter

const oddCheck=(arr)=>{
			 return arr.filter(x => x%2 !==0 && typeof x ==='number')
		}

console.log(oddCheck(fullArr))
