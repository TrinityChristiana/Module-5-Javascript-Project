//Trinity Terry
//This program has the user input the grams of fat and calories from a food item, then calculates the item's percentage of calories from fat and then displays the final amount to the user. It also tells the user if the food item is low in fat.
//This program uses prompt boxes.

function main()
{
    var fatGrams;
    var calories;
    var caloriesFat;

    welcome();
    fatGrams = getUserInput("fatGrams", 0);
    //Display's validated Fat value in console
    console.log(fatGrams)
    calories = getUserInput("calories", fatGrams);
    //Display's validated calories value in console
    console.log(calories)
    caloriesFat = calcCaloriesFat(fatGrams, calories);
    //Display's validated Calories from fat value (in decimal form) in console
    console.log(caloriesFat)
    displayOutput(caloriesFat);
}

//Opening prompt greets user.
function welcome()
{
    alert("Welcome to the Fat Gram Calculator");
}

//Gets and validates user's input for both calories and fats.
function getUserInput(taco, fatGrams)
{
    if (taco == "fatGrams"){
        //User Input for Fat
        userInput = prompt("How many grams of Fat does the food item have?");
        //Validation Loop for Fat
        while(userInput < 0){
            userInput = prompt("ERROR: Incorrect fat gram value." + "\nEnter the correct amount of fat grams.");
        } 
    }else{
        //User Input for calories
        userInput = prompt("How many calories does the food item have?");
        //Validation loop for calories
        while(userInput < 0 || userInput < (fatGrams * 9)){
            userInput = prompt("ERROR: Incorrect fat gram value." + "\nEnter the correct amount of calories.");
        } 
    }
    
    //Returns user input to main function variable
    return userInput;

}
//Calculates Calories from Fat
function calcCaloriesFat(fatGrams, calories)
{
    caloriesFat = ((fatGrams * 9) / calories);
    return caloriesFat;
}

function displayOutput(caloriesFat)
{
    //"caloriesFat * 100" puts caloriesFat's decimal value it into percentage format.
    //".toFixed(0)"hows no umbers after the decimalpoint
    caloriesFat = (caloriesFat * 100).toFixed(0)

    //Outputs calculated Calories from Fat to user.
    //Determines whether or not the message "This item is also low in fat!"
    if(caloriesFat < 0.3) {
        alert("This food This food item has " + caloriesFat + "% of Calories from Fat" + "\n\n This item is also low in fat!");      
    } else {
        alert("This food This food item has " + caloriesFat + "% Calories from Fat");
    }
}
main();