// Creating an element
// Creating textnode
// innerhtml
// adding element to DOM
// node.append(...nodes or strings) – append nodes or strings at the end of node,
// node.prepend(...nodes or strings) – insert nodes or strings at the beginning of node,
// node.before(...nodes or strings) –- insert nodes or strings before node,
// node.after(...nodes or strings) –- insert nodes or strings after node,
// node.replaceWith(...nodes or strings) –- replaces node with the given nodes or strings.
// remove element


const elemCon = document.getElementById('elem-con');

const div =  document.createElement('div');
div.classList.add('div');
div.innerHTML = "Hello, where are you headed?";

const textnode =  document.createTextNode('I\'m headed to the market');

const i = document.createElement('i');
i.innerHTML = "<b>Hello</b>, you look nice!!";

const b = document.createElement('b');
b.innerHTML = "The day is bright";

elemCon.append(div)
elemCon.prepend(textnode)
elemCon.before(i)
// elemCon.after(i)
i.replaceWith(b)

textnode.remove()



