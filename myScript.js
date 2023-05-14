import { getElementByIdOrFail } from "./utils.js"
import { characters } from "./characters.js"
import { antiHeroes } from "./antiheroes.js"

const myButton = getElementByIdOrFail("myButton1")
const myPara = getElementByIdOrFail("myPara1")
const myList = getElementByIdOrFail("myList1")


const characterElems = characters.map(ch => {
    const el = document.createElement("li");
    el.addEventListener("click", () => { alert(ch.powers.join(", ")) })
    el.addEventListener("mouseover", () => {

        myPara.innerText = ch.name + ": " + ch.powers.join(", ")
    })
    el.innerHTML = ch.name + " from " + ch.book;
    return el;
});


characterElems.forEach(li => myList.appendChild(li))


myButton.addEventListener("click", () => {
    const answer = prompt("input any number");
    // alert("You said: " + answer)
    myPara.outerHTML = "You said: " + answer
})

