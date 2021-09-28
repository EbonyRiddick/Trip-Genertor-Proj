let entertainment = ['A Wine Tour', 'The State Park', 'A Brewery Tour', 'A Festival'];
let transportation = ["train", "Bus", "car"];
let destination = ['South Carolina', 'Georgia', 'Alabama', 'Tennessee'];
let resturant = ['Sea Food', 'BBQ', 'Southern Cuisine', 'Steak House'];


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
console.log("Destination: " + chosenDest + "\n" + "Transportation: " + chosenTrans + "\n" + "Entertainment: "  + chosenEnt + "\n" + "Resturant:" + chosenRest);

// function choseItem(someArray){
//     let result = Math.floor(Math.random()* someArray.length);
//     return result;
// }
//  = choseItem(destination);
// console.log(chosenDest);
//let chosenTrans = choseItem(transportation);
// let chosenEnt = choseItem(entertainment);
// let chosenRest = choseItem(resturant);

// alert or console.log the results

// choseItem([destination]);
// console.log(chosenDest);
// show them the results (alert or prompt)

// Ask for confirm - tool to use: prompt

let answer = "no";
let confirm= prompt("Are you happy with these options?");
let ask;
let confirmed = confirmation(answer);
let tryingToFixIt = fixIt(confirmed);
function confirmation(answer){
    if(answer === "yes"){
        return true;
    }
    else{
        return false;
        }
}
// function fixIt(confirmed){
//      while (answer !== "yes"){
       
//      }
//      if(ask === "")
//      return confirmed;
// }









// repeat - tool to use: while loop



// if yes, show finals results (alert and console.log)