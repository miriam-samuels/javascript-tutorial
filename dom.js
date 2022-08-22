/*
// ************************* //
// The topmost tree nodes are available directly as document properties:
// <html> = document.documentElement
// The topmost document node is document.documentElement. That’s the DOM node of the <html> tag.
// <body> = document.body
// Another widely used DOM node is the <body> element – document.body.
// <head> = document.head
// The <head> tag is available as document.head.
// ************************* //
// parentElement
// childNodes
// firstChild
// lastChild
// siblings

// console.log(document.body.parentElement)
// console.log(document.body.childNodes)
*/

// ************************* //
// getElementbyId
// getElementsbyClassName
// getElementsbyTagName
// getElementbyName
// querySelector
// querySelectorAll
// styling

let r = 30;
let g = 20;
let b = 50
const heading1 = document.getElementById("heading1")
const headings = document.getElementsByClassName("heading")
const allHeadings =  document.getElementsByTagName("h1")
const headingName = document.getElementsByName("midsize-heading")

const getElementByStyle =  document.querySelectorAll(".heading")
const headingsArray = Array.from(headings)
const styleArray = Array.from(getElementByStyle)

console.log(heading1.nextElementSibling)

styleArray.map((elem) => {
    elem.style.color = "blue";
})




// heading1.style.color = "brown"

// setTimeout(() => {
//     heading1.style.color = "gold"
// },2000)

// setInterval(() => {
//     r += 30;
//     g += 10;
//     b += 20;

//     heading1.style.color = `rgb(${r},${g},${b})`
// },1000)