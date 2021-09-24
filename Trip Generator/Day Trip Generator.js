let entertainment = ['Wine Tour', 'State Park', 'Brewery Tour', 'Festival'];
let transportation = ["train", "Bus", "car"];
let destination = ['South Carolina', 'Georgia', 'Alabama', 'Tennessee'];
let resturant = ['Sea Food', 'BBQ', 'Southern Cuisine', 'Steakhouse'];
let start = "go";

let randomNumber = Math.floor(Math.random()*3);
let randomNumber2 = Math.floor(Math.random()*4);



function choseItem(someArray){
    let result = Math.floor(Math.random()* someArray.length);
    return result;
}

let chosenDest = choseItem(destination);
let chosenTrans = choseItem(transportation);

// alert or console.log the results

// show them the results (alert or prompt)
// Ask for confirm - tool to use: prompt
// if no, prompt for choice to change - tool to use: conditional
// repeat - tool to use: while lopp

// if yes, show finals results (alert and console.log)