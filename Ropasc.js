//"caching the DOM: this maps the const values to the getElementBy action for convinience and efficiency"//
let userScore = 0;
let aiScore = 0;
const userScore_span = document.getElementById("user-score");
const aiScore_span = document.getElementById("ai-score");
const scoreBoard_div = document.querySelector(".scoreboard");
const result_p = document.querySelector(".result > p");
const fire_div = document.getElementById("f");
const wind_div = document.getElementById("w");
const water_div = document.getElementById("wa");


function getAiChoice() {
    const choices = ["f", "w", "wa"];
    const randomNumber = (Math.floor(Math.random() *3));
    return choices[randomNumber];
}

function convertToWord(letter) {
    if (letter === "f") return "Fire";
    if (letter === "w") return "Wind";
    return "Water";
}

function win(userChoice,aichoice) {
    const userindicator = "You".fontsize(2).sup();
    const aiindicator = "AI".fontsize(2).sup();
    const win_glow = document.getElementById(userChoice);
    userScore ++;
    userScore_span.innerHTML = userScore;
    aiScore_span.innerHTML = aiScore;
    result_p.innerHTML = `${convertToWord(userChoice)}${userindicator} Beats ${convertToWord(aichoice)}${aiindicator}. You Won!`;
    win_glow.classList.add('green-glow');
    setTimeout(() => win_glow.classList.remove('green-glow'),400);

}

function lose(userChoice,aichoice) {
    const userindicator = "You".fontsize(2).sup();
    const aiindicator = "AI".fontsize(2).sup();
    const win_glow = document.getElementById(userChoice);
    aiScore ++;
    userScore_span.innerHTML = userScore;
    aiScore_span.innerHTML = aiScore;
    result_p.innerHTML = `${convertToWord(userChoice)}${userindicator} Looses to ${convertToWord(aichoice)}${aiindicator}. You Lost!`;
    win_glow.classList.add('red-glow');
    setTimeout(() => win_glow.classList.remove('red-glow'),400);
}

function draw(userChoice,aichoice) {
    const userindicator = "You".fontsize(2).sup();
    const aiindicator = "AI".fontsize(2).sup();
    const win_glow = document.getElementById(userChoice);
    result_p.innerHTML = `${convertToWord(userChoice)}${userindicator} Matches ${convertToWord(aichoice)}${aiindicator}. Draw!!`;
    win_glow.classList.add('grey-glow');
    setTimeout(() => win_glow.classList.remove('grey-glow'),400);
}


function game(userChoice) {
    const aichoice = getAiChoice();
    switch(userChoice+aichoice) {
        case "fw":
        case "wwa":
        case "waf":
            win(userChoice,aichoice);

            break;
        case "wf":
        case "waw":
        case "fwa":
            lose(userChoice,aichoice);
            break;
        case "w":
        case "wawa":
        case "ff":
            draw(userChoice,aichoice);
            break;

    }
    }



function main() {
    fire_div.addEventListener('click', () => game("f"));

    wind_div.addEventListener('click',() => game("w"));

    water_div.addEventListener('click', () => game("wa"));
}  

main(); 