
// Transform an Array
// Map -----
// sort
// localeCompare
// reverse
// split and join 

const numbers = [1, 8, 5, 7, 6, 2];
const letters = ["James", "Aisha", "Nevile"];
const users = [
    { name: "Harry", age: 30 },
    { name: "Zendaya", age: 24 },
    { name: "Wanda", age: 35 }
]


// ************************* //
// map
// const result = numbers.map((number,index,array) => number + index + 2 + array[1]);

// const result = letters.map((letter) => letter.length)


// ************************* //
// sort
// const result = letters.sort((a,b) => b.localeCompare(a))

// ************************* //
// reverse
// const result = numbers.reverse()

// ************************* //
// join
// const result = letters.join("-")
const result = "James".split()

console.log("result :", result);