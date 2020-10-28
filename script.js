
/** 
 * Array for inputs. text-based
*/
let userInputs = [];

/**
 * Clears the textbar after submission
 */
function clearField() {
    document.getElementById("answer").value = "";
}
/**
 * reads the input from the player and displays where the player is
 */
function getAnswer() {
/*
var input = document.getElementById("answer").value;

if (input === "start") {
    document.getElementById("intro").classList.toggle("hidden");
    document.getElementById("rise").classList.toggle("hidden");
    userInputs.push(input);

} else if (input == "inspect the door" && userInputs.includes("start")) {
    document.getElementById("rise").classList.toggle("hidden");
    document.getElementById("toilet-door").classList.toggle("hidden");
    userInputs.push(input);

} 
 else if (input == "flush toilet" && userInputs.includes("start")) {
    if (userInputs.includes("inspect the door")) {
        document.getElementById("toilet-door").classList.toggle("hidden");
    }

    document.getElementById("flush-toilet").classList.toggle("hidden");
    document.getElementById("rise").classList.toggle("hidden");
    userInputs.push(input);

} 
*/


}





function runGame() {
    document.getElementById("intro").classList.toggle("hidden");
    document.getElementById("rise").classList.toggle("hidden");
    userInputs.push();

}

function flushToilet() {
    document.getElementById("flushToilet").classList.toggle("hidden");
    document.getElementById("rise").classList.toggle("hidden");
    userInputs.push();

}

function inspectTheDoor() {
    document.getElementById("inspectTheDoor").classList.toggle("hidden");
    document.getElementById("rise").classList.toggle("hidden");
    userInputs.push();

}

function fineFlushToilet() {
    
    document.getElementById("flushToilet").classList.toggle("hidden");
    document.getElementById("inspectTheDoor").classList.toggle("hidden");
    

}

function nahImGood() {
    document.getElementById("inspectTheDoor").classList.toggle("hidden");
    document.getElementById("nahImGood").classList.toggle("hidden");

}

function damn() {
    document.getElementById("flushToilet").classList.toggle("hidden");
    document.getElementById("monster").classList.toggle("hidden");
    userInputs.push();

}

function sayHi() {
    document.getElementById("monster").classList.toggle("hidden");
    document.getElementById("sayHi").classList.toggle("hidden");
    userInputs.push();

}

function potionYes() {
    document.getElementById("potionYes").classList.toggle("hidden");
    document.getElementById("sayHi").classList.toggle("hidden");
    userInputs.push();

}

function potionNo() {
    document.getElementById("potionNo").classList.toggle("hidden");
    document.getElementById("sayHi").classList.toggle("hidden");
    userInputs.push();

}

function thisIsNotApotion() {
    document.getElementById("potionNo").classList.toggle("hidden");
    document.getElementById("potionYes").classList.toggle("hidden");

}

function ehmThanks() {
    document.getElementById("potionYes").classList.toggle("hidden");
    document.getElementById("ehmThanks").classList.toggle("hidden");

}

function runAway() {
    document.getElementById("monster").classList.toggle("hidden");
    document.getElementById("runAway").classList.toggle("hidden");

}

function goLeft2() {
    document.getElementById("goLeft").classList.toggle("hidden");
    document.getElementById("ehmThanks").classList.toggle("hidden");

}

function goLeft() {
    document.getElementById("goLeft").classList.toggle("hidden");
    document.getElementById("runAway").classList.toggle("hidden");

}

function goRight() {
    document.getElementById("goRight").classList.toggle("hidden");
    document.getElementById("runAway").classList.toggle("hidden");

}

function goRight2() {
    document.getElementById("goRight").classList.toggle("hidden");
    document.getElementById("ehmThanks").classList.toggle("hidden");

}

function onlyToWell() {
    document.getElementById("goRight").classList.toggle("hidden");
    document.getElementById("onlyToWell").classList.toggle("hidden");

}

/**
 * Character-name submission
 */