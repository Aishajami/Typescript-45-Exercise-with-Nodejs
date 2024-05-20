let guestList = ["Haleema","Hareem","Hassan","Hussain"];

let dontCome = guestList[0]

console.log(dontCome, "Nahi aah asakti nakhrybaz.");

guestList.splice(0, 1, "Miral");

guestList.forEach(guest => console.log(`Assalam-o-alaikum ${guest}, would you like to iftar with me?`));
