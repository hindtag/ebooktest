// This is a HTML-CSS-JS code
// This is a song DEMO using array and function
/* 
let distractionList = Array("", "Suck his thumb", "Tie his shoe", "Climb a tree", "Shut the door");

const makeSong = () => { // convert into arrow function
    let output = document.getElementById("output");
    output.innerHTML = "";
    for (verseNumber = 1; verseNumber < distractionList.length; verseNumber++){
        output.innerHTML += verse(verseNumber);
        output.innerHTML += chorus();
    }
}

const chorus = () => {
    let result = ` and they all came marching down, <br>`;
    result += `boom boom boom boom <br>`;
    result += `boom boom boom boom <br>`;
    result += `<br>`;
    return result;
}

const verse = (verseNumber) => {
    let distraction = distractionList [verseNumber];
    let result = `The ants go marching `;
    result += verseNumber + " by " + verseNumber + ", ";
    result += `hurrah, hurrah <br>`;
    result += `The ants go marching `;
    result += verseNumber + " by " + verseNumber + ", ";
    result += `hurrah, hurrah <br>`;
    result += `The ants go marching `;
    result += verseNumber + " by " + verseNumber + ", ";
    result += `The little one stops to `;
    result += distraction + "<br> <br>";
    return result
}

makeSong(); 

//End of song demo */


// let critter = new Object();
// critter.name = "gamgam";
// critter.age = 16;

// console.log(typeof critter);
// alert("the critter's name is " +critter.name);