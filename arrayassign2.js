





let arrr=["a","b","c","d","e","f","g"]
console.log(arrr[0])
console.log(arrr[3])
console.log(arrr[6])

//  Declare an array called mixed Data Types, put different data types in the array and find the length of the array. The array size should be greater than 5

let arr = [ "yes","i am","well",1,"2",{name:"kit"}, null]
console.log(arr.length)

//  Declare an array variable name itCompanies and assign initial values Facebook, Google, Microsoft, Apple, IBM, Oracle and Amazon

let itCompanies = ["Facebook", "Google", "Microsoft", "Apple", "IBM", "Oracle", "Amazon"]
//
console.log(itCompanies)
// Print the number of companies in the array
console.log(itCompanies.length)


//  Print the first company, middle and last company



console.log(itCompanies[0])
console.log(itCompanies[3])
console.log(itCompanies[6])

//  Print out each company
for(let x of itCompanies)
{
    console.log(x)
}
//  Change each company name to uppercase one by one and print them out
for(let x of itCompanies)
{
    console.log(x.toUpperCase())
}


// 13 Print the array like as a sentence: Facebook, Google, Microsoft, Apple, IBM, Oracle and Amazon are big IT companies.
itCompanies.push("are big IT companies")
console.log(itCompanies)
console.log(itCompanies.join(','))

let itCompanies = prompt("enter the companies :")


// 14 Check if a certain company exists in the itCompanies array. If it exists return the company else return a company is not found

if(itCompanies=="Facebook"|| itCompanies=="Google"|| itCompanies=="Microsoft"||itCompanies=="Apple"||itCompanies=="IBM"||itCompanies=="Oracle"||itCompanies=="Amazon")
{
    console.log("the company exists")
}
else
{
console.log("the company is not found")
}
//15 Filter out companies which have more than one 'o' without the filter method.

console.log(itCompanies.splice(3,4))

// 16 Sort the array using sort() method

console.log(itCompanies.sort())


// 17 Reverse the array using reverse() method
console.log(itCompanies.reverse())

//18 Slice out the first 3 companies from the array

console.log(itCompanies.slice(0,3))
// 19 Slice out the last 3 companies from the array
console.log(itCompanies.slice(4,7))

//20 Slice out the middle IT company or companies from the array
console.log(itCompanies.slice(3,4))
//21 Remove the first IT company from the array
 itCompanies.shift()
 console.log(itCompanies)

//22 Remove the middle IT company or companies from the array
console.log(itCompanies.slice(3,4))
//2 Remove the last IT company from the array
 itCompanies.pop()
 console.log(itCompanies)
//23 Remove all IT companies
itCompanies.splice(0,7)
console.log(itCompanies)

//Level 2

// 2 First remove all the punctuations and change the string to array and count the number of words in the array
let text =
'I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.'

console.log(text.split(" "))

let words = ["I", "love", "teaching", "and", "empowering", "people", "I", "teach", "HTML", "CSS", "JS", "React", "Python"]
console.log(words)
console.log(words.length)

// 3 //In the following shopping cart add, remove, edit items
const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey']

//add 'Meat' in the beginning of your shopping cart if it has not been already added
 shoppingCart.unshift("Meat")
 console.log(shoppingCart)
 //  add Sugar at the end of you shopping cart if it has not been already added
 shoppingCart.push("Sugar")
 console.log(shoppingCart)
 //  remove 'Honey' if you are allergic to honey
shoppingCart.pop()
console.log(shoppingCart)
// modify Tea to 'Green Tea'
shoppingCart.splice(2,1,"Green Tea")
console.log(shoppingCart)



//In states array check if 'Ethiopia' exists in the array if it exists print 'ETHIOPIA'. If it does not exist add to the states list.

//.Concatenate the following two variables and store it in a fullStack variable.
const frontEnd = ['HTML', 'CSS', 'JS', 'React', 'Redux']
const backEnd = ['Node','Express', 'MongoDB']

const fullStack = frontEnd.concat(backEnd)

console.log(fullStack)
//1.The following is an array of 10 students ages:
const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24]
//Sort the array and find the min and max age
ages.sort(function(a, b)
{
    
    return a-b
  
    
});
let min = ages[0]
let max = ages[9];
  console.log(ages) 
  let median = (ages[Math.floor(ages.length/2)])

  console.log(median + " "+ "is the median age") 
  
  
 console.log(max + " " +"is the max value ")
  console.log(min+ " " + "is the min value")
  


