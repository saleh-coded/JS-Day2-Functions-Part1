/**
 * Task 1:
 * Create a function named `printName`
 * - that just prints your name on the screen
 */

function printName() {
    console.log("Saleh");
}

printName();


/**
 * Task 2:
 * Create a function named `printAge`
 * - that takes a birth year as a parameter,
 * - and prints the age on the screen.
 * - Age = current year - birth
 */

function printAge(birth) {

    Age = 2024 - birth

    console.log(Age);
}

let birth = 1989;
printAge(birth);

//  ..Or remove let birth = 1989
function printAge(birth) {

    Age = 2024 - birth

    console.log(Age);
}
printAge(1989);

/**
 * Task 3:
 * Create a function named `printAgeAndName`
 * - that takes a birth year and your name as parameters,
 * - and prints 'Hello NAME you are AGE years old' on the screen.
 * - Age = current year - birth
 */


function printAgeAndName(birth, name) {

    Age = 2024 - birth
    console.log(`Hello ${name} you are ${Age} years old.`);
}

printAgeAndName(1989, "Saleh");

/**
 * Task 4:
 * Create a function named `printHello`
 * - that takes 2 parameters, name, and language
 * - language can be passed in different values, here are the accepted values:-
 * -- en: it should print `Hello NAME`
 * -- es: it should print `Hola NAME`
 * -- fr: it should print `Bonjour NAME`
 * -- tr: it should print `Merhaba NAME`
 */

function printHello(name, language) {

    if (language === "en") {
        console.log(`Hello ${name}`);
    } else if (language === "es") {
        console.log(`Hola ${name}`);
    }  else if (language === "fr") {
        console.log(`Bonjour ${name}`);
    } else if (language === "tr") {
        console.log(`Merhaba ${name}`);
    } 
    
    // console.log(`${language} ${name}`);
}

printHello("Saleh", "tr");

// or
function printHelloo(name, language) {

    if (language === "en") {
         language = "Hello";
    } else if (language === "es") {
         language = "Hola";
    }  else if (language === "fr") {
         language = "Bonjour";
    } else if (language === "tr") {
         language = "Merhaba";
    } 

    
    console.log(`${language} ${name}`);
}

printHelloo("Saleh", "tr");


/**
 * Task 4:
 * Create a function named `printMax`
 * - that takes 2 parameters as numbers
 * - should print out the bigger number
 */

function printMax(x,y) {

    if (x >= y) {
        console.log(x);
   } else {
    console.log(y);
   }
}

printMax(20,10);