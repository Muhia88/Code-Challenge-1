// Import the 'prompt-sync' module to enable synchronous user input from the terminal
const prompt = require("prompt-sync")();

//estimateTransactionFee function
function estimateTransactionFee(){
    //prompts the user
    const userInput = prompt("Unatuma Ngapi? (KES):");

    //converts to a number
    const amountToSend = parseInt(userInput, 10);

    //validates input, if input is NaN or 0 or less than 0, it exits the function
    if(isNaN(amountToSend) || amountToSend <= 0){
        return;
    }

    //declaring variables
    const feeRate = 0.015;
    const minFee = 10;
    const maxFee = 70;

    //calculating transaction fees
    let transactionFee = amountToSend * feeRate;
    

    //if statements to set min and max fee on occurrence
    if(transactionFee <= 10){
        transactionFee = minFee;
    }
    if(transactionFee >= 70){
        transactionFee = maxFee;
    }

    //calculating amount debited
    const totalAmount = amountToSend + transactionFee;

    //displaying results
    console.log(`Sending KES ${amountToSend}:`);
    console.log(`Calculated Transaction Fee: KES ${transactionFee}`);
    console.log(`Total amount to be debited: KES ${totalAmount}`);
    console.log("\nSend Money Securely!");
}

//function call
estimateTransactionFee();   