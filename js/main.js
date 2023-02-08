// || DATA TYPES
// string, numbers, boolean, null, undefined

// const Name = "Pedro";
// const Age = 19;
// const Rating = 49.3;
// const isComplete = true;
// const val = null;
// const unk = undefined;

// console.log(typeof val);

// Explanation: By using typeof(argument), you can identify what data types of the variable.

/*
// || STRING MANIPULATION using concatenation and backticks
const Name = "Pedro";
const Age = 19;

let string = `My name is ${Name} and my age is ${Age}`;

// Explanation: Using template literals, the output of the console log is "My name is Pedro and my age is 19"

// || Getting the length of a string
console.log(Name.length); // Output is 5 for variable Named "Pedro"
console.log(Name.toLocaleUpperCase()); // Output is PEDRO

// .length is a dot notation method.
// .toLocaleUpperCase() is also a built in method that capitalize the string.

*/

/*
// || ARRAY

const Fruits = ["Orange", "Mango", "Banana", "Grapes", "Pineapple"];

Fruits[5] = "Santol"; // If you know the numbers of array, you can add "Santol" at the end of an array using this method.
Fruits.push("Jack Fruit"); // If you don't know the numbers of an array.
Fruits.unshift("Kamias")// You can add a new value at the start of an array.
Fruits.pop();// This will remove the last value 

console.log(Fruits); // Output is ["Kamias, Orange", "Mango", "Banana", "Grapes", "Pineapple, Santol", Jack Fruit]
console.log(Fruits[1]); // Output is "Orange", because of the index since Kamias was added at the start.
console.log(Array.isArray(Fruits)); // To check if it is an array.
console.log(Fruits.indexOf("Banana")); // To check the index of a value

Fruits.splice(0, 2); // With this method, kamias and orange was removed.
console.log(Fruits);

*/

// || OBJECT literals
// used for api

/* | Basic
const tao = {
    firstName: "Pedro",
    lastName: "Penduko",
    age: 33,
    favorites: ["apple", "blue", "english", "Pinoy"],
    familyMembers: {
        father: "Pedro Sr",
        mother: "Nenang",
        sister: "Nena"
    }
};

console.log(tao); // Output is JSON format
console.log(tao.firstName); // Output is Pedro
console.log(tao.firstName, tao.lastName); // Output is Pedro Penduko
console.log(tao.favorites[2]); // Output is English and this is an array
console.log(tao.familyMembers.sister); // Output is Nena and this is an object


let myFavorites = tao.favorites[2]
letPedroFavorites = `Pedro favorite is ${myFavorites}`
console.log(letPedroFavorites); // Output is Pedro favorite is english


 // | ARRAY OBJECTS
 const Contacts = [
    {
        id: 1,
            fullName: "Pedro Penduko Jr.",
            isSaved: "Phone"
    },
    {
        id: 2,
            fullName: "Pedro Penduko Sr.",
            isSaved: "Phone"
    },
    {
        id: 3,
            fullName: "Nenang Penduko",
            isSaved: "SD"
    },

 ];

 console.log(Contacts); // Output is JSON
 console.log(Contacts[1].fullName); // Output is Pedro Penduko Sr.
*/


// || LOOPS

 // | For loop

    // for (let i = 0; i <= 10; i++){
    //     console.log(i);
    // };

    /* Output is:
        0
        1
        2
        3
        4
        5
        6
        7
        8
        9
        10
    */

// | While loop

    // let i = 0;
    // while(i <= 10){
    //     console.log(`While loop value is ${i}`);
    //     i++;
    // }

    /* Output is:
        While loop value is 0
        While loop value is 1
        While loop value is 1
        While loop value is 2
        While loop value is 3
        While loop value is 4
        While loop value is 5
        While loop value is 6
        While loop value is 7
        While loop value is 8
        While loop value is 9
        While loop value is 10
    */

 // | Using FOR loop on array objects 

    // const Contacts = [
    //     {
    //         id: 1,
    //             fullName: "Pedro Penduko Jr.",
    //             Occupation: "Spirit Doctor",
    //             isSaved: "Phone"
    //     },
    //     {
    //         id: 2,
    //             fullName: "Pedro Penduko Sr.",
    //             Occupation: "Retired Navy SEAL",
    //             isSaved: "Phone"
    //     },
    //     {
    //         id: 3,
    //             fullName: "Nenang Penduko",
    //             Occupation: "House Wife",
    //             isSaved: "SD"
    //     },

    // ]; 

    // for (let i = 0; i < Contacts.length; i++){
    //     console.log(Contacts[i].fullName);
    // };

    /* Output is:
        Pedro Penduko Jr.
        Pedro Penduko Sr.
        Nenang Penduko
    */

 // | Using FOR OF loop on array objects 

    // for (let contact of Contacts) {
    //     console.log(contact.fullName);
    // };

    /* Output is also:
        Pedro Penduko Jr.
        Pedro Penduko Sr.
        Nenang Penduko
    */

// | MAP method

// const ContactsFullname = Contacts.map
//     (function(contact) {
//     return contact.fullName;
// });

// console.log(ContactsFullname); // Output is array of fullname

// const ContactsOccupation = Contacts.map
//     (function(contact) {
//     return contact.Occupation;    
// });

// console.log(ContactsOccupation); // Output is array of Occupation using map method

// | Using filter on array objects using loop

// const ContactsPhone = Contacts.filter
//     (function(contact) {

//         return contact.isSaved == "Phone";
//     }).map(function(contact){
//         return contact.fullName;
//     });

    // This is called connecting function.
// console.log(ContactsPhone); // Explaination: You filter out the array object using the filter function for the phone then map out the full name to return the Full Name.

// || JSON
//  Api only provide an array objects formats.

// const ContactsJSON = JSON.stringify
//     (Contacts);

// console.log(ContactsJSON);

// End of loop

