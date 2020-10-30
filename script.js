



/** Starts the game from the intro-page*/
function runGame() {
    document.getElementById("intro").classList.toggle("hidden");
    document.getElementById("rise").classList.toggle("hidden");

}
/** Takes you from the start of the game to flushing the toilet*/
function flushToilet() {
    document.getElementById("flushToilet").classList.toggle("hidden");
    document.getElementById("rise").classList.toggle("hidden");

}
/** Takes you to inspecting the door in the toilet from the start */
function inspectTheDoor() {
    document.getElementById("inspectTheDoor").classList.toggle("hidden");
    document.getElementById("rise").classList.toggle("hidden");
 
}
/** Takes you to flushing the toilet from inspecting the door */
function fineFlushToilet() {    
    document.getElementById("flushToilet").classList.toggle("hidden");
    document.getElementById("inspectTheDoor").classList.toggle("hidden");
    
}
/** Kills you for refusing to flush the toilet */
function nahImGood() {
    document.getElementById("inspectTheDoor").classList.toggle("hidden");
    document.getElementById("nahImGood").classList.toggle("hidden");

}
/** Takes you from flushing the toilet to meeting the crocodile */
function damn() {
    document.getElementById("flushToilet").classList.toggle("hidden");
    document.getElementById("monster").classList.toggle("hidden");

}
/** Takes you from meeting the crocodile to what happens 
    if you say hi to the crocodile */
function sayHi() {
    document.getElementById("monster").classList.toggle("hidden");
    document.getElementById("sayHi").classList.toggle("hidden");

}
/** The crocodile gives you a can of pommac */
function potionYes() {
    document.getElementById("potionYes").classList.toggle("hidden");
    document.getElementById("sayHi").classList.toggle("hidden");

}
/** The crocodile kills you for refusing to buy his wares */
function potionNo() {
    document.getElementById("potionNo").classList.toggle("hidden");
    document.getElementById("sayHi").classList.toggle("hidden");

}
/** The crocodile kills you for pointing out that a can of pommac
    isnt a potion */
function thisIsNotApotion() {
    document.getElementById("potionNo").classList.toggle("hidden");
    document.getElementById("potionYes").classList.toggle("hidden");

}
/** The crocodile is happy that you liked his potion, the adventure continues */
function ehmThanks() {
    document.getElementById("potionYes").classList.toggle("hidden");
    document.getElementById("ehmThanks").classList.toggle("hidden");

}
/** Takes you away from the crocodile */
function runAway() {
    document.getElementById("monster").classList.toggle("hidden");
    document.getElementById("runAway").classList.toggle("hidden");

}
/** Takes you from the crocodile after getting a pommac to a crossroad and shows you what's to the left*/
function goLeft2() {
    document.getElementById("goLeft").classList.toggle("hidden");
    document.getElementById("ehmThanks").classList.toggle("hidden");

}
/** After running away from the crocodile you take a left from a crossroad */
function goLeft() {
    document.getElementById("goLeft").classList.toggle("hidden");
    document.getElementById("runAway").classList.toggle("hidden");

}
/** After running away from the crocodile you take a right from a crossroad */
function goRight() {
    document.getElementById("goRight").classList.toggle("hidden");
    document.getElementById("runAway").classList.toggle("hidden");

}
/** After getting a pommac from the crocodile you take a right at a */
function goRight2() {
    document.getElementById("goRight").classList.toggle("hidden");
    document.getElementById("ehmThanks").classList.toggle("hidden");

}
/**You fall down a pipe after going right in the crossroad */
function onlyToWell() {
    document.getElementById("goRight").classList.toggle("hidden");
    document.getElementById("onlyToWell").classList.toggle("hidden");

}
/**
 * Restarts the game (Play again button) */
function playAgain() {
    location.reload();
}


/**
* The Hooded stranger asks you for your name
*/

function getName1() {
    let name = document.getElementById("name1").value;
    let span = document.getElementById('nameFirst');
    span.innerText = name;
 
    document.getElementById("wrongName").classList.toggle("hidden");
    document.getElementById("onlyToWell").classList.toggle("hidden");


    }
/**
* The gooded stranger asks for your name again
* @If you type in the "right name" meaning it ends with "!!!" you toggle the win-screen
* @else If you dont yell your name at the old man he just kills you
*/

function getName2() {
    let name = document.getElementById("name2").value;
    let span = document.getElementById('nameSecond');
    span.innerText = name;

// Name ending with "!" toggles win-screen
      if (name.includes("!")) {
        document.getElementById("wrongName").classList.toggle("hidden"); 
        document.getElementById("youWon").classList.toggle("hidden"); 
    }

    
// Name not ending with "!!!" toggles death-screen
    else {
    document.getElementById("wrongName").classList.toggle("hidden");
    document.getElementById("wrongAgain").classList.toggle("hidden");
    
    
    }
    
}