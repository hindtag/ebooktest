var article = "a";
var numShirts = 0;
var smallShirts = 0;
var medShirts = 0;
var largeShirts = 0;

function calcShirts(sizeShirt) {
    if (sizeShirt === "S" || sizeShirt === "s") {
        smallShirts++;
        numShirts++;
    } else if (sizeShirt === "M" || sizeShirt === "m") {
        medShirts++;
        numShirts++;
    } else if (sizeShirt === "L" || sizeShirt === "l") {
        largeShirts++;
        numShirts++;
    }
}

do {
    var answer = prompt("Would you like to purchase " + article + " t-shirt? If so, enter the size (S, M, L) and click OK. When you finish, click Cancel.",);

    article = "ANOTHER";

    if (answer !== null) {
        calcShirts(answer);
    }
} while (answer !== null);

document.write("You ordered " + numShirts + " shirts: " + smallShirts + " small, " + medShirts + " medium, " + largeShirts + " large.");
