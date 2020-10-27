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

} else if (input == "inspect" && userInputs.includes("start")) {
    document.getElementById("rise").classList.toggle("hidden");
    document.getElementById("toilet-door").classList.toggle("hidden");
    userInputs.push(input);

}



}