let userInputs = [];


function clearField() {
    document.getElementById("answer").value = "";
}

function getAnswer() {

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



}
/*
function runGame() {
    document.getElementById("intro").classList.toggle("hidden");
    document.getElementById("rise").classList.toggle("hidden");
    userInputs.push(input);
}
*/

function damn() {
    document.getElementById("flush-toilet").classList.toggle("hidden");
    document.getElementById("monster").classList.toggle("hidden");

}