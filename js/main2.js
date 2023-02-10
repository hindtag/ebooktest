function displayText() {

let firstGraf =document.getElementById("graf1");
let secondGraf =document.getElementById("graf2");

firstGraf.style.visibility = (document.myForm.graf1box.checked) ? "visible" : "hidden";
secondGraf.style.visibility = (document.myForm.graf2box.checked) ? "visible" : "hidden";
}

function changeText(){

let newText = document.myForm.changeableText.value;

let oldText = document.getElementById("graf3")

oldText.firstChild.nodeValue = newText;

}