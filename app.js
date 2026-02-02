let userScore=0;
let compScore=0;
const choice=document.querySelectorAll(".choice");
const genComputerChoice=()=>{
    const option =["rock","paper","scissor"];
const randomidx=Math.floor(Math.random()*3);
return option[randomidx];
};
const playGame =(you) =>{
    console.log("user choice=",userChoice);
    const campChoice =genComputerChoice();
    console.log("comp choice=",campChoice);
    if(userChoice==)
    }
choice.forEach((choice)=>{
    choice.addEventListener("click",()=>{
const userChoice =choice.getAttribute("id");
playGame(userChoice);
    })
})
