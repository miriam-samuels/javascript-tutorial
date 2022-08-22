
const name1 = "Miriam"
const num1 = 20
const num2 = 10

const check = num1 > num2 ? console.log("yay") : console.log("nay")



if (num1 === num2) {
    console.log("the values are the same")
} else if (num1 <= num2){
    console.log("the values are not the same")
} else {
    console.log("I don't know wht's going on here")
}

switch (num1) {
    case 1:
        console("the number is 1")
        break;
    case 20:
        console.log("the number is 20")
        break;
    default:
        console.log("none met")
        break;
}