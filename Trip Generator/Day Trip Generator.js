let entertainment = ['A Wine Tour', 'The State Park', 'A Brewery Tour', 'A Festival'];
let transportation = ["train", "Bus", "car"];
let destination = ['South Carolina', 'Georgia', 'Alabama', 'Tennessee'];
let resturant = ['Sea Food', 'BBQ', 'Southern Cuisine', 'Steak'];

let randomNumber = Math.floor(Math.random()*3);
let randomNumber2 = Math.floor(Math.random()*4);

function choseDest(){
    let response = destination[randomNumber2];
    return response;
}
let chosenDest = choseDest();

function choseTrans(){
    let response = transportation[randomNumber];
    return response;
}
let chosenTrans = choseTrans();

function choseEnt(){
    let response = entertainment[randomNumber2];
    return response;
}
let chosenEnt = choseEnt();

function choseRest(){
    let response = resturant[randomNumber2];
    return response;
}
let chosenRest = choseRest();

alert("       Here are your trip options!");
console.log("You will be going to: " + chosenDest + "\n" + "By: " + chosenTrans + "\n" + "You will be going to/on: "  + chosenEnt + "\n" + "You will be having " + chosenRest + " for dinner");

// function choseItem(someArray){
//     let result = Math.floor(Math.random()* someArray.length);
//     return result;
// }
//  = choseItem(destination);
// console.log(chosenDest);
// let chosenTrans = choseItem(transportation);
// let chosenEnt = choseItem(entertainment);
// let chosenRest = choseItem(resturant);

// alert or console.log the results

// choseItem([destination]);
// console.log(chosenDest);
// show them the results (alert or prompt)

// Ask for confirm - tool to use: prompt

let answer = prompt("Are you satisfied with these options?");
console.log(answer);

// function confirmation(answer){
//     if(answer.toLowerCase === "no"){
//         prompt("Which detail would you like to change?");
//     }
//     else{
//         console.log("Have a great trip!");
//     }
// }





    
    



// if no, prompt for choice to change - tool to use: conditional
// repeat - tool to use: while lopp

// if yes, show finals results (alert and console.log)