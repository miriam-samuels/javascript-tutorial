// const cars = new Array();
const cars = ["mercedes", "aston martin", "ferrari", "bugatti", "toyota", { name: "hyundai", color: "black" }]

cars[0] = "mercedes benz"
cars[6] = "kia"
cars[7] = "piccanto"

// console.log(cars[5].name)


cars.push("toyota camry") // adds an element to the back of the array
cars.pop() // removes an element from the back of the array

cars.unshift("toyota camry"); // adds an element to the front of the array
cars.shift();// removes an element from the front of the array
// console.log(cars)

let nums = [0,1,2,3,4,5,6,7,8,9]
// for (const num of nums) {
//     i += num
// }
let j = 0;

for (let i = 0; i < nums.length; i++) {
    j += nums[i]
}
console.log(j)
