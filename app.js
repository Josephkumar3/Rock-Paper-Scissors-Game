let userScore=0;
let compScore=0;
let userScorePara=document.querySelector("#user-score");
let compScorePara=document.querySelector("#comp-score");
let msg=document.querySelector(".msg");

const choices = document.querySelectorAll(".choice");

// computer choice generation
const genCompChoice=()=>{
    const options=["rock","paper","scissors"];
    const randomIdx=Math.floor(Math.random()*3);
    return options[randomIdx];
}

//draw game
const drawGame=()=>{
    msg.innerText="The Game is drawn. Play Again";
    msg.style.backgroundColor="#081b31";
    msg.style.color="orange";
}

//winning condition
const winner=(userWin,userChoice,compChoice)=>{
    if (userWin){
        userScore++;
        userScorePara.innerText=userScore;
        msg.innerText=`You win. ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor="Green";
        msg.style.color="yellow";
    }
    else{
        compScore++;
        compScorePara.innerText=compScore;
        msg.innerText=`You Lose. ${compChoice} beats ${userChoice}`;
        msg.style.backgroundColor="Red";
        msg.style.color="#f2e8cf";
    }

}

// user choice and play game
const playGame=(userChoice)=>{
    let compChoice=genCompChoice();
    if(userChoice===compChoice){
        drawGame();
    }
    else{
        let userWin=true;
        if(userChoice==="rock"){
            // scissors , paper
            userWin=compChoice==="paper"?false:true;
        }
        else if(userChoice=== "paper"){
            // rock , scissors
            userWin=compChoice === "rock"?true:false;
        }
        else{
            userWin=compChoice === "rock"?false:true;
        }
     winner(userWin,userChoice,compChoice);
    }
}


choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        let userChoice=choice.getAttribute("id");
        playGame(userChoice);
    })
})