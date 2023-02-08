function processForm(){
// Grab input from form
var txtNormal = document.getElementById("txtNormal");
var pwd = document.getElementById("pwd");
var hidden = document.getElementById("hidden");
var txtArea = document.getElementById("txtArea");

var normal = txtNormal.value;
var password = pwd.value;
var secret = hidden.value;
var bigText = txtArea.value;

// Create Output
var result = "";
result += "<dl> \n";
result += "<dt>normal</dt> \n";
result += "<dd>" + normal + "</dd> \n";
result += " \n";
result += "<dt>password</dt> \n";
result += "<dd>" + password + "</dd> \n";
result += " \n";
result += "<dt>secret</dt> \n";
result += "<dd>" + secret + "</dd> \n";
result += " \n";
result += "<dt>bigtext</dt> \n";
result += "<dd>" + bigText + "</dd> \n";
result += "<dl> \n";


console.log(output);
var output = document.getElementById("output");
output.innerHTML = result;
}