
const button = document.getElementById("hello")
button.addEventListener('click', () => {
    const name = prompt("what is your name", "Jane");
    confirm(`Are you sure your name is ${name}`)
    alert(`Hello World to ${name}`);

})