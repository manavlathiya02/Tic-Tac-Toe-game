let boxes = document.querySelectorAll(".box"); 
let resetButton = document.querySelector("#reset"); 
let newGameBtn=document.querySelector("#new-btn");
let msgcontainer=document.querySelector(".msg-container");
let msg=document.querySelector("#msg");

let turnO = true; 

const winPatterns = [
  [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [1, 4, 7],
  [2, 5, 8],
  [2, 4, 6],
  [3, 4, 5],
  [6, 7, 8],
];
const resetGame=()=>{
   turnO =true;
   enableboxes();
   msgcontainer.classList.add("hide");
};
const enableboxes=()=>{
  for(let box of boxes ){
    box.disabled=false;
    box.innerText="";
  }
}
boxes.forEach((box) => {
  box.addEventListener("click", () => {
    console.log("Box was clicked!");
    if(turnO){
      box.innerText="O";
      turnO=false;
    }else{
      box.innerText="X";
      turnO=true;
    }
    box.disabled=true;
    checkwinner();
  });
});
resetGame();
function showWinner(winner){
  msg.innerText=`Congratulation winner is ${winner}`;
  msgcontainer.classList.remove("hide");
  disableboxes();
}
function checkwinner(){
  for(let pattern of winPatterns){
    let   pos1val=boxes[pattern[0]].innerText;
    let pos2val=boxes[pattern[1]].innerText;
    let pos3val=boxes[pattern[2]].innerText;  


    if(pos1val != ""&&pos2val !="" &&pos3val!=""){
      if(pos1val ===pos2val &&pos2val===pos3val){
        console.log(`winner is ${pos1val}`);
        showWinner(pos1val);
      }
    }
  }
}
const disableboxes=()=>{
  for(let box of boxes ){
    box.disabled=true;
  }

};
newGameBtn.addEventListener("click",resetGame);

resetButton.addEventListener("click",resetGame);

 // console.log(pattern[0],pattern[1],pattern[2]);
    // console.log(boxes[pattern[0]].innerText
    //   ,boxes[pattern[1]].innerText,
    //   boxes[pattern[2]].innerText);