#! /usr/bin/env node

import inquirer from "inquirer"

let myBalance = 20000; // my balace in pkr

let pin = 11111; // the pin code 



//taking the input from the user
let pinAnswer = await inquirer.prompt([{

    name : "pinQuestion",
    type : "number",
    message : "Enter Your Pin Number"

}])


//checking if the pin is correct
if (pinAnswer.pinQuestion === pin){

    console.log("Correct pin code");

    //again taking input from the user to select the type to select either if wants to widthdraw or checkBalace
    let select = await inquirer.prompt([{

        name : "selectAnswer",
        type : "list",
        message : "Select any one to proceed",
        choices : ["width draw", "check balace"]

    }])

        //if he want to widthdraw take input from the user again by selecting the proceeding type
        if (select.selectAnswer == "width draw"){

            let choice = await inquirer.prompt([{
            name : "choiceAnswer",
            type : "list",
            message : "select the type of width drawing",
            choices : ["enter any amount type", "select amount by options"]  

            }])
                
                //if the widthdraw type is any amount type... he can select whatever he wants to select... by taking his input
                if(choice.choiceAnswer === "enter any amount type"){

                       let enterAmount = await inquirer.prompt([{

                        name : "amount",
                        type : "number",
                        message : "Enter Your amount"

                       }])

                    //using a variable to detect the amount
                    let remainingBalacne = myBalance - enterAmount.amount;
                    
                    //the homework from sirHamza if the value is more than the balance it should not proceed
                    if (enterAmount.amount > myBalance){

                        console.log("You Do not have that much money in you atm, please check your balance and try again!")

                    }

                    //the homework again by SirHamza using templete literal
                    else {

                        console.log(`The remaining amount is ${remainingBalacne}`)

                    }
                }
                // i added another feature by selecting options too
                else{

                  let selectOptions = await inquirer.prompt([{

                    name : "options",
                    message : "Select any options",
                    type : "list",
                    choices : ["1000", "2000" , "3000", "4000", "5000", "6000", "7000"]

                  }])

                   //again that work
                  let remainingBalacne2 = myBalance - selectOptions.options
                  console.log(`The remaing amount is ${remainingBalacne2}`)
                }
    }

         else {

        console.log(`Your balance is ${myBalance}`)

        }
}
else {

    console.log("Incorrect Pin Code")
    
}

//that was the code thank you (code by Abdulsamad)