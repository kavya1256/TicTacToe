let boxes=document.querySelectorAll(".box");
let winnermsg=document.querySelector(".msg");
let newgame=document.querySelector("#newgame");
let restbtn=document.querySelector("#resetgame");
let msgcontainer=document.querySelector(".msg-container");
let pattrens=[[0,1,2],
[3,4,5],
[6,7,8],
[0,4,8],
[2,4,8],
[0,3,6],
[1,4,7],
[2,5,8]];


let playerx=true;
let count=0;
boxes.forEach((box)=>{
  box.addEventListener("click",()=>
  {
    if(playerx)
    {
    box.innerText="x";
    playerx=false;
    }
    else{
      box.innerText="o";
    playerx=true;
    }
    box.disabled=true;
    count++;
    let isWinner=checkwinner();
    if(count===9 && !isWinner)
    {
      winnermsg.innerText="Game Draw";
       msgcontainer.classList.remove("hide");
       disableBoxes();
    }
  });
 
});
const resetgame =()=>
{
  playerx=true;
  count=0;
  enableboxes();
  msgcontainer.classList.add("hide");
}
const disableboxes=()=>
{
 for(let box of boxes){
   box.disabled=true;
 }
};
const enableboxes=()=>
{
 for(let box of boxes)
 {
   box.disabled=false;
   box.innerText="";
 }
}
const showWinner=(winner)=>
{
   msgcontainer.classList.remove("hide");
  winnermsg.innerText=`congratulations the winner is ${winner}`;
 disableboxes();

};
const checkwinner=()=>{
  for(let pattren of pattrens){
    let posval1=boxes[pattren[0]].innerText;
    let posval2=boxes[pattren[1]].innerText;
    let posval3=boxes[pattren[2]].innerText;
    if(posval1!=="" && posval2!=="" && posval3!=="")
    {
      if(posval1===posval2 && posval2===posval3 && posval3===posval1)
      {
        showWinner(posval1);
        return true;
      }
    }
  }
  };
newgame.addEventListener("click",resetgame);
restbtn.addEventListener("click",resetgame);
