let entertainment = ['Wine Tour', 'State Park', 'Brewery Tour', 'Festival'];
let transportation = ["train", "Bus", "car"];
let destination = ['South Carolina', 'Georgia', 'Alabama', 'Tennessee'];
let resturant = ['Sea Food', 'BBQ', 'Southern Cuisine', 'Steakhouse'];
let start = "go";

let randomNumber = Math.floor(Math.random()*3);
let randomNumber2 = Math.floor(Math.random()*4);



function determineDestination(){
    let response = destination[randomNumber2];
    return response;
}
let place = determineDestination();

function determineTransportation(){
    let how = transportation[randomNumber];
    return how;
}
let mode = determineTransportation();

function determineEntertainment(){
    let fun = entertainment[randomNumber2];
    return fun;
}

function determineResturant(){
    let eat = resturant[randomNumber2];
    return eat;
}
