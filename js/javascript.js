function sayHi() {
    var txtName = document.getElementById("txtName");
    divOutput = document.getElementById("divOutput")

    name = txtName.value;

    divOutput.innerHTML = " " + name + " "
    divOutput.innerHTML += " is a very nice name."
}