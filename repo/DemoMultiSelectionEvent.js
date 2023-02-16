function showChoices(){
    let selLanguage = document.getElementById("selLanguage");
    let result = `<h2> Your Languages </h2>`;
    result += `<ul> \n`;

    for (i = 0; i < selLanguage.length; i++){
        currentOption = selLanguage[i];
        if (currentOption.selected == true) {
            result += "<li>" + currentOption.value + "<\/li> \n"
        }
    }
    result += "</ul> \n"
    output = document.getElementById("output");
    output.innerHTML = result;
}