"use strict";
//Making a Function
function make_shirt(size = "Large", printMessage = "I Love Typescript") {
    console.log(`Creating a ${size} Shirt with the ${printMessage} Prints on Shirt`);
}
//Calling a Function with by default values
make_shirt();
//Calling a function now with Medium size and default message
make_shirt("Medium");
make_shirt("Small");
//Calling a Function now with Small size in Different print Message
make_shirt("Small", "I love Javascript");
