let userScore=0;
let compScore=0;
const choice=document.querySelectorAll(".choice");
const genComputerChoice=()=>{

}
const playGame =(you) =>{
    console.log("user choice=",userChoice);
}
choice.forEach((choice)=>{
    choice.addEventListener("click",()=>{
const userChoice =choice.getAttribute("id");
playGame(userChoice);
    })
})
