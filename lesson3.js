//<img id="image" src="https://i.imgur.com/NypBNAF.png" class="mentalist" alt="" /><br>
const RANDOM_NUM = Math.floor(Math.random() * 11);
let numOfGuesses = 0;

function Guess()
{
    let guess = parseInt(document.getElementById("value").value);
    let message = document.getElementById("result");
    let status = document.getElementById("status");

    let imageLink = document.getElementById("image");
    imageLink.innerHTML = "<img src=\"https://i.imgur.com/I4F7MmT.png\" class=\"mentalist\" alt=\"\" />";

    if(guess === RANDOM_NUM)
    {
        message.innerHTML = "You got me!";
        imageLink.innerHTML = "<img src=\"https://i.imgur.com/urG7m9G.png\" class=\"mentalist\" alt=\"\" />";
        status.innerHTML = "";
    }
    else
    {
        message.innerHTML = "Try again, boya...";

        if(RANDOM_NUM > guess)
        {
            status.innerHTML = "Hint for you: my number is greater than yours";
        }
        else // guess is less than randomNum
        {
            status.innerHTML = "Hint for you: my number is smaller than yours";
        }
    }

    numOfGuesses++;
    let guesses = document.getElementById("guesses");
    guesses.innerHTML = "Number of guesses: " + numOfGuesses;
}