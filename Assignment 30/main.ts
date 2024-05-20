//Creating an arraay
let userName = ["Aisha", "Jamil", "Najma", "Admin", "Ahmed"];

//Using ForEach Loop on Array
userName.forEach(oneUser => {
    if (oneUser === "Admin"){
        console.log(`Hello${oneUser}, would you like to see a status Report?"`);
    }else{
        console.log(`Hello ${oneUser}, Thank you for logging in again`);
    }
})