//Creating a Guest List Array
var guestList = ["Haleema", "Hareem", "Hassan", "Hussain"];
//Making variable for those guest who cant come
var dontCome = guestList[0];
//Print the name of guest who cant come
console.log(dontCome, "Nahi aah asakti nakhrybaz");
//Add or Remove guest from guest list Array
guestList.splice(0, 1, "Miral");
//Message Print for Bigger table
console.log("Good news! We have found a bigger table for iftar");
//Adding a new guest at starting index of array
guestList.unshift("Ahmed");
//Adding a new guest at ending index of array
guestList.push("Moosa");
//Get a middle index of our guest list array
var middleIndex = Math.floor(guestList.length / 2);
//Adding a new guest to middle index of array
guestList.splice(middleIndex, 0, "Orhan");
//Print Message of updated list
console.log("Updated list of our guests");
//Sending a invitation message to our guests one by one with their names
guestList.forEach(function (oneguest) { return console.log("Assalam-o-alaikum ".concat(oneguest, ", Would you like to Iftar with me?")); });
