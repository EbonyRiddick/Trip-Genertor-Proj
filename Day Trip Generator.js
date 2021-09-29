let entertainment = ['A Wine Tour', 'The State Park', 'A Brewery Tour', 'A Festival'];
let transportation = ["train", "Bus", "car", "boat"];
let destination = ['South Carolina', 'Georgia', 'Alabama', 'Tennessee'];
let resturant = ['Sea Food', 'BBQ', 'Southern Cuisine', 'Steak House'];

// let randomNumber = Math.floor(Math.random()*4);

// function choseDest(){
//     let response = destination[randomNumber];
//     return response;
// }
// let chosenDest = choseDest();

// function choseTrans(){
//     let response = transportation[randomNumber];
//     return response;
// }
// let chosenTrans = choseTrans();

// function choseEnt(){
//     let response = entertainment[randomNumbe];
//     return response;
// }
// let chosenEnt = choseEnt();

// function choseRest(){
//     let response = resturant[randomNumber];
//     return response;
// }
// let chosenRest = choseRest();

// alert("       Here are your trip options!");
// console.log("Destination: " + chosenDest + "\n" + "Transportation: " + chosenTrans + "\n" + "Entertainment: "  + chosenEnt + "\n" + "Resturant:" + chosenRest);


// // let chosenDest = choseItem(destination);
// // console.log(chosenDest);
// //let chosenTrans = choseItem(transportation);
// // let chosenEnt = choseItem(entertainment);
// // let chosenRest = choseItem(resturant);

// // alert or console.log the results

// // choseItem([destination]);
// // console.log(chosenDest);
// // show them the results (alert or prompt)

// // Ask for confirm - tool to use: prompt

// let answer = "no";
// let confirm= prompt("Are you happy with these options?");
// let ask;
// let confirmed = confirmation(answer);
// let tryingToFixIt = fixIt(confirmed);
// function confirmation(answer){
//     if(answer === "yes"){
//         return true;
//     }
//     else{
//         return false;
//         }
// }

// function fixIt(confirmed){
//      while (answer !== "yes"){
       
//      }
//      if(ask === "")
//      return confirmed;
// }
// repeat - tool to use: while loop
// if yes, show finals results (alert and console.log)

let tripFeatures = [getRandomArray(destination), getRandomArray(transportation), getRandomArray(entertainment),  getRandomArray(resturant)];

function getRandomArray(array){
    return array[Math.floor(Math.random() * array.length)]
}

function displayTrip(arrayOfFeatures){
    let finalString = "";
    for(let index = 0; index < arrayOfFeatures.length; index++){
        finalString += arrayOfFeatures[index] + "\n";
    }
    alert(finalString);
}

function app(){
    let userSatisfied = false;
    while(userSatisfied === false){
        displayTrip(tripFeatures);
        let userInput = prompt("Are you satisfied with the trip? YES or NO");
        if (userInput === "YES"){
            userSatisfied = true;
            displayTrip(tripFeatures);
        }
        else{
            reselectTripFeatures();
        }
    }
    
}

function reselectTripFeatures(){
    let userInput = prompt("Which feature would you like to change? <destination, transportation, entertainment, resturant>")
    switch(userInput){
        case "destination":
            tripFeatures[0] = getRandomArray(destination);
            break;
        case "transportation":
            tripFeatures[1] = getRandomArray(transportation);
            break;
        case "entertainment":
            tripFeatures[2] = getRandomArray(entertainment);
            break;
        case "resturant":
            tripFeatures[3] = getRandomArray(resturant);
            break;
        default:
            alert("Please choose a feature")
            reselectTripFeatures();
            break;
             
    }
}
app();