//calculateChaiIngredients function
function calculateChaiIngredients(){
    //prompts user
    const userInput = prompt("Karibu! How many cups of Chai Bora would you like to make?");

    //converts to a number
    const numberOfCups = parseInt(userInput, 10);

    //validates input, if input is NaN or 0 or less than 0, it exits the function
    if(isNaN(numberOfCups) || (numberOfCups <= 0)){
        return;
    }

    //declaration of variables
    const standardWater = 200;
    const standardMilk = 50;
    const standardTeaLeaves = 1;
    const standardSugarTbs = 2;

    //calculation of variables
    const totalWater = standardWater * numberOfCups;
    const totalMilk = standardMilk * numberOfCups;
    const totalTeaLeaves = standardTeaLeaves * numberOfCups;
    const totalSugarTbs = standardSugarTbs * numberOfCups;

    //displaying results
    console.log(`To make ${numberOfCups} cups of Kenyan Chai, you will need:`);
    console.log(`Water: ${totalWater} ml`);
    console.log(`Milk: ${totalMilk} ml`);
    console.log(`Tea Leaves (Majani): ${totalTeaLeaves} tablespoons`);
    console.log(`Sugar (Sukari): ${totalSugarTbs} teaspoons`);
    console.log("\nEnjoy your Chai Bora!");
}

//call the function
calculateChaiIngredients();