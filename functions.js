// function add(num1,num2){
//     console.log(num1 + num2)
// }

// const add = function (num1,num2) {
//     console.log(num1 + num2)
// }

const add = (num1, num2) => {
    console.log(num1 + num2)
}

const subtract = (num1, num2) => {
    console.log(num1 - num2)
}
const calc = (num1, num2, operation) => {
    if (operation === "+") {
        console.log(num1 + num2)
    } else if (operation === "-") {
        console.log(num1 - num2)
    }
}

function sayHi(name){
    console.log(`Hi, ${name}`)
}

// calc(12, 10,"+")
// calc(12, 10,"-")

sayHi("Joshua")