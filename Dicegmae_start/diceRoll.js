
function rollDice()
{
    // alert("test");
    let leftDice = Math.floor(Math.random() * ((6 - 1) + 1) + 1);
    let rightDice = Math.floor(Math.random() * ((6 - 1) + 1) + 1);

    // set dice image
    document.getElementById("leftDice").src = `./dice-${leftDice}.svg`;
    document.getElementById("rightDice").src = `./dice-${rightDice}.svg`;

    // win-lose?
    let total = leftDice+rightDice;
    document.getElementById("total").innerHTML = total;
    if (total >= 8) {
        document.getElementById("winMessage").innerHTML = "You win: Try Again!";
    }
    else {
        document.getElementById("winMessage").innerHTML = "You didn't win: Try Again!";
    }
}

var button = document.querySelector(".rollButton");
button.addEventListener("click", rollDice);
