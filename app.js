let userScore=0;
let compScore=0;
const choice=document.querySelectorAll(".choice");
const msg =document.querySelector("#msg");

const userScorepara=document.querySelector("#you");
const compScorepara =document.querySelector("#camp");

const genComputerChoice=()=>{
    const option =["rock","paper","scissor"];
const randomidx=Math.floor(Math.random()*3);
return option[randomidx];
};
const drawGame=()=>{
    msg.innerText="Game was Draw. Play again.";
    msg.style.background ="#081b31";
};

const showWinner =(userWin,userChoice,campChoice) =>{
    if(userwin){
        userScore++;
        userScorepara.innerText =userScore;
        msg.innerText=`You lose.${campChoice} beat your ${userChoice}`;
        msg.style.backgroundcolor="red";
    }
};
const playGame =(you) =>
    {
    const campChoice =genComputerChoice();
    console.log("comp choice=",campChoice);
    if(userChoice== compChoice){
        drawGame();
     } else{
            let userWin=true;
            if(userChoice==="rock"){
                userWin=campChoice==="paper" ?false:true;

            }
            elseif (userChoice==="paper")
        }
    }
choice.forEach((choice)=>{
    choice.addEventListener("click",()=>{
const userChoice =choice.getAttribute("id");
playGame(userChoice);
    })
})
