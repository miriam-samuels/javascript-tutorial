
const users = [
    { name: "Miriam", favColor: "black", hobby: "having fun" },
    { name: "Grace", favColor: "purple", hobby: "reading" },
    { name: "Chris", favColor: "white", hobby: "eating" },
    { name: "Triumph", favColor: "blue", hobby: "talking" },
    { name: "Jacob", favColor: "brown", hobby: "coding" },
]

const users2 = [
    { name: "kristina", favColor: "black", hobby: "having fun" },
    { name: "Tobi", favColor: "purple", hobby: "reading" },
    { name: "Racheal", favColor: "white", hobby: "eating" },
    { name: "Kethura", favColor: "blue", hobby: "talking" },
    { name: "Aisha", favColor: "brown", hobby: "coding" },
]

const people = ["Moses", "Paul", "Joy", "Samuel", "Mary", "Joy"]

const pet = "dog" 
const numbers = [1, 5, 8, 2, 3, 9, 7]

const normObject = {
    pet1 : "dog"
}

// delete users[2]

console.log(Array.isArray(people))



const splicedArray = users.splice(2,1) // delete a user
const splicedArray2 = users.splice(2,0, { name: "Angela", favColor: "skyblue", hobby: "sleeping" },) //add a user
const spliced3 = users.splice(3,1, { name: "Fatima", favColor: "navyblue", hobby: "data analysis" },)// replace a user

const sliced = users.slice(0,2)

const newUsersList = users.concat(users2)
const newUsersList2 = [...users,...users2]
// console.log(newUsersList2)

// console.log(pet.includes("dog"))

const user = users.findIndex((elem,index,arr) => elem.name == "Angela") 

const filteredUsers = users.filter((elem,index,arr) => elem.name.includes("A") )

// console.log(filteredUsers)

//  Array methods
// delete
// splice arr.splice(start[, deleteCount, elem1, ..., elemN])
// slice  arr.slice([start], [end])
// concat arr.concat(arg1, arg2...)

// Searching an Array
// indexOf arr.indexOf(item, from)
// lastIndexOf
// includes arr.includes(item, from)
// find 
// findIndex
// filter



// diffrentiate an array from other objects 
// Array.isArray method