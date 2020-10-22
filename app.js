"use strict"

//destinations
let destSel = ["Hogsmeade","Hogwarts","Kings Cross","Shreeking Shack","Private Drive","The Burrow", "Diagon Alley"];
//resturants
let restSel = ["Leaky Cauldron", "Great Hall", "The Hogs Head", "Honeydukes","The Hogwarts Kitchens"];
//transportation
let transportSel = ["the Hogwarts Express", "a Flying Ford Anglia","Apparition","a Broom","a Flying Motorcycle", "Floo Powder"];
//entertainment
let entSel = ["Quidditch Match","de-Gnoming","Tri-Wizzard Tournament"];
let arr = [destSel,restSel,transportSel,entSel];
let total = [];
let complete;

function dayTrip(){
    for(let i = 0; i < arr.length;i++){ //itterate over arr
        let rand = Math.floor(Math.random() * arr[i].length); 
        total.push(arr[i][rand]);
    }
    
    complete = prompt("You are going to " + total[0] +". Eating at " + total[1] + ". Getting there with " + total[2] + ". And having " + total[3] + " as entertainment. Are you happy with your day trip? Answer 'yes' or 'no'");

    while(complete == "no"){

        let redo = prompt("Would you like to randomly re-select your (0)destination, (1)resturant, (2)mode of transport, or (3)entertainment? Enter one number 0-3");

        dayTripRedo(redo);
    }

    console.log("You are going to " + total[0] +". Eating at " + total[1] + ". Getting there with " + total[2] + ". And having " + total[3] + " as entertainment.");
}

function dayTripRedo(redo){
    let rand = Math.floor(Math.random() * arr[redo].length); 

    total[redo] = arr[redo][rand];

    complete = prompt("You are going to " + total[0] +". Eating at " + total[1] + ". Getting there with " + total[2] + ". And having " + total[3] + " as entertainment. Is this day trip complete? Answer 'yes' or 'no'");
}

dayTrip();