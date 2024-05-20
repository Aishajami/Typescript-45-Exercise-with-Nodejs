var guestList = ["Haleema", "Hareem", "Hassan", "Hussain"];
var dontCome = guestList[0];
console.log(dontCome, "Nahi aah asakti nakhrybaz.");
guestList.splice(0, 1, "Miral");
guestList.forEach(function (guest) { return console.log("Assalam-o-alaikum ".concat(guest, ", would you like to iftar with me?")); });
