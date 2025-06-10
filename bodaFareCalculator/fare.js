// Import the 'prompt-sync' module to enable synchronous user input from the terminal
const prompt = require("prompt-sync")();

//calculateBodaFare function   
function calculateBodaFare(){
    //prompts the user
    const userInput = prompt("Unafika wapi Mkubwa? Kilometer ngapi?:");

    //converts to a number
    const distanceInKm = parseInt(userInput, 10);

    //validates input, if input is NaN or 0 or less than 0, it exits the function
    if(isNaN(distanceInKm) || distanceInKm <= 0){
        return;
    }
    //declaration of variable
    const baseFare = 50;
    const chargePerKM = 15;

    //calculation of variables
    const kilometerCharge = chargePerKM * distanceInKm;
    const totalFare = baseFare + kilometerCharge;

    //display results
    console.log(`Uko kwote? Io ni ${distanceInKm} km:`);
    console.log(`Ukikalia Pikipiki: KES ${baseFare}`);
    console.log(`Mpaka Uko: KES ${kilometerCharge}`);
    console.log(`Total: KES ${totalFare}`);
    console.log("\nPanda Pikipiki!");

}

//call function
calculateBodaFare();