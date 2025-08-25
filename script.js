let btn=document.querySelectorAll(".gamebutton");
let rstbtn=document.querySelector(".reset");
let msgcontainer=document.querySelector(".messagecontainer");
let msg=document.querySelector(".winnermessage");
let rcontainer=document.querySelector(".restartmessage");
let rbutton=document.querySelector(".restartbutton");

let turnO=true;
const winPattern=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,4,6],
    [2,5,8],
    [3,4,5],
    [6,7,8],
]
const restartgame=()=>{
    turnO=true;
    enableboxes();
    msgcontainer.classList.add("hide");
    rcontainer.classList.add("hide");
}

const enableboxes=()=>{
    for(let gamebutton of btn){
gamebutton.disabled=false;
gamebutton.innerText="";
    }
    
}
rbutton.addEventListener("click",restartgame);
rstbtn.addEventListener("click",restartgame);

btn.forEach((gamebutton) =>{
    gamebutton.addEventListener("click",()=>{
        console.log("button was clicked");
       if(turnO){
        gamebutton.innerText="O";
        turnO=false;
       }
       else{
        gamebutton.innerText="X";
        turnO=true; 
       }
       gamebutton.disabled=true;

       checkWinner();
    });
});
const disablebutton=()=>{
    for(let gamebutton of btn){
        gamebutton.disabled=true;
    }

}
const showWinner=(winner)=>{
    msg.innerText=`Congratulations winner is ${winner}`;
    msgcontainer.classList.remove("hide");
    rcontainer.classList.remove("hide");
    disablebutton();
}

const checkWinner=()=>{
    for(let pattern of winPattern){
       let posvalue1=btn[pattern[0]].innerText;
       let posvalue2=btn[pattern[1]].innerText;
       let posvalue3=btn[pattern[2]].innerText;
    
    if(posvalue1 != "" && posvalue2 != "" && posvalue3 != ""){
        if(posvalue1 === posvalue2 && posvalue2 === posvalue3){
            console.log("winner",posvalue1);
            showWinner(posvalue1);
        }
    }
    }
}