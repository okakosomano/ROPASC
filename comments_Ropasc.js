//"caching the DOM: this maps the const values to the getElementBy action for convinience and efficiency"//
//ASSIGN VALUES OF 0 YO USER AND AI SCORES
let userScore = 0;
let aiScore = 0;
//REFERENCE THE SCORE ELEMENTS IN HTML
const userScore_span = document.getElementById("user-score");
const aiScore_span = document.getElementById("ai-score");
//REFERENCE THE SCOREBOARD AND RESULT IN HTML
const scoreBoard_div = document.querySelector(".scoreboard");
const result_p = document.querySelector(".result > p");
//REFERENCE THE BUTTTONS IN HTML 
const fire_div = document.getElementById("f");
const wind_div = document.getElementById("w");
const water_div = document.getElementById("wa");

//tHIS SECTION CALCULATES THE AI CHOICE- THE MATH.RANDOM FUNCTION GETS A RANDOM NUMBER BETWEEN 0 AND 0.9
//MULTIPLYING IT BY 3 GIVES A NUMBER BETWEEN 0 AND 2.9. THEN THE MATH.FLOOR FUNC ITS NESTED IN ROUNDS IT DOWN TO A WHOLE NUMBER SO ITS BETWEEN 0, 1 AND 2
//ALL THIS IS WRAPPED IN THE GETAICHOICE FUNC WHICH HAS AN ARRAY OF VALUES TO CHOOSE FORM AND RETURNS THE VALUE CORRESPONDING TO THE POSITION IN THE ARRAY.
function getAiChoice() {
    const choices = ["f", "w", "wa"];
    const randomNumber = (Math.floor(Math.random() *3));
    return choices[randomNumber];
}

//DEFINES THE FUNCTION GAME WHICH IS DEPENDENT ON THE WHAT THE USER CLICKS ON (IE. USERCHOICE)
function game(userChoice) {
    //THIS DEFINES ASSIGNS THE NAME "AICHOICE" TO THE RESULT FROM THE FUNCTION "GET AICHOICE"
    const aichoice = getAiChoice();
    //THIS IS SAYING THAT WHENEVER THE RESULTS (USERCHOICE,AICHOICE) ARE AS BELOW, ITS A WIN
    switch(userChoice+aichoice) {
        case "fw":
        case "wwa":
        case "waf":
            win(userChoice,aichoice);
            break;
        
    //THIS IS SAYING THAT WHENEVER THE RESULTS (USERCHOICE,AICHOICE) ARE AS BELOW, ITS A LOSS
        case "wf":
        case "waw":
        case "fwa":
            lose(userChoice,aichoice);
            break;
    //THIS IS SAYING THAT WHENEVER THE RESULTS (USERCHOICE,AICHOICE) ARE AS BELOW, ITS A DRAW
        case "ww":
        case "wawa":
        case "ff":
            draw(userChoice,aichoice);
            break;

    }


//EVENT  LISTENER
//CALLS THE FUNCTION "GAME" WHEN THE BUTTONS ARE CLICKED
function main() {
    fire_div.addEventListener('click', () => game("f"));

    wind_div.addEventListener('click',() => game("w"));

    water_div.addEventListener('click', () => game("wa"));
}  

//CALLS THE FUNCTION "MAIN" ABOVE
main(); 




// THIS BLOCK USES THE IF STATEMENT TO RETURN A WORD INSTEAD OF A LETTER DEPENDING ON THE RESULT OF THE CLICK.
function convertToWord(letter) {
    if (letter === "f") return "Fire";
    if (letter === "w") return "Wind";
    return "Water";
}

//THIS BLOCK DEFINES THE WIN FUNCTION:
//THE CONST ASSIGNS THE VALUES "AI" AND "YOU" TO THE RESPCTIVE CONSTANTS AND MAKES WIN_GLOW DISPLAY THE GLOW 
// USERSCORE INCREASES WHEN THE WIN ARGUEMENT IS SATISFIED BEACUSE OF THE "++" 
function win(userC hoice,aichoice) {
    const userindicator = "You".fontsize(2).sup();
    const aiindicator = "AI".fontsize(2).sup();
    const win_glow = document.getElementById(userChoice);
    userScore ++;
    userScore_span.innerHTML = userScore;
    aiScore_span.innerHTML = aiScore;
    result_p.innerHTML = `${convertToWord(userChoice)}${userindicator} Beats ${convertToWord(aichoice)}${aiindicator}. You Win!`;
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



    }





