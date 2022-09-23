// https://github.com/miriam-samuels/javascript-tutorial

// mouse events
// onclick	The user clicks an HTML element
// onmouseover	The user moves the mouse over an HTML element
// onmouseout	The user moves the mouse away from an HTML element
// bunny project

// form events
// onChange
// onSubmit
// focus


const colorForm = document.getElementById('color-form');
const colorInput = document.getElementById('color-input');
const focusInput = document.getElementById('focus-input');

colorInput.addEventListener('change', () => {
    const val = colorInput.value;
    document.body.style.backgroundColor = val
})

colorForm.addEventListener('submit', () => {
    alert(`Yay, you chose the color ${colorInput.value}`)
})

focusInput.addEventListener('focus', () => {
    const el = document.createElement('p')
    el.innerHTML = "Element has been focused on"
    focusInput.after(el)
})
// let bunnies = []

// const btn = document.getElementById("hello")
// const hoverBtn = document.getElementById("hover-me");
// const addBunny = document.getElementById("add-bunny");
// const removeBunny = document.getElementById("remove-bunny");

// const bun = document.createElement('span')

// addBunny.addEventListener('click', () => {
//     bunnies.push("🐰")
//     bun.innerHTML = bunnies.join("")
// })

// removeBunny.addEventListener('click', () => {
//     bunnies.pop()
//     bun.innerHTML = bunnies.join("")
// })

// document.body.prepend(bun)




// window.addEventListener("click", () => {
//     document.body.style.backgroundColor = "green"
// })

// btn.addEventListener("click", () => {
//     document.body.style.backgroundColor = "black"
// })
// hoverBtn.addEventListener("mouseover", () => {
//     document.body.style.backgroundColor = "black"
// })
// hoverBtn.addEventListener("mouseout", () => {
//     document.body.style.backgroundColor = "white"
// })
