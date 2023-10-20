console.log(" Welcome to Tic tac toe");
let audioTurn = new Audio("mixkit-arcade-game-jump-coin-216.wav")
let gameoveraudio = new Audio("mixkit-circus-lose-2030.wav")
let music = new Audio("AUD-20231013-WA0016.mp3")
let turn = "X";
let gameover = false;

// for changingthe turn
const changeTurn = () => {

   return turn === "X"?"O":"X"
}

// for checking  winner
const checkWin = () => {
    let boxtext = document.getElementsByClassName('boxtext')
     let wins = [
        [0, 1, 2, 5, 5, 0],
        [3, 4, 5, 5, 15, 0],
        [6, 7, 8, 5, 25, 0],
        [0, 3, 6, -5, 15, 90],
        [1, 4, 7, 5, 15, 90],
        [2, 5, 8, 15, 15, 90],
        [0, 4, 8, 5, 15, 45],
        [2, 4, 6, 5, 15, 135],
     ]
     wins.forEach(e =>{
        if((boxtext[e[0]].innerText === boxtext[e[1]].innerText) && (boxtext[e[2]].innerText === boxtext[e[1]].innerText)&&(boxtext[e[0]].innerText !=="")){
            document.querySelector('.info').innerText=boxtext[e[0]].innerText +" Won"
            gameover = true;
            document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width="250px";
            document.querySelector(".line").style.width= "20vw"; 
            document.querySelector(".line").style.transform = `translate(${e[3]}vw, ${e[4]}vw) rotate(${e[5]}deg)` 
        }
     })

}

//game logic
const interval = setInterval(function(){music.play()},8000);
let boxes = document.getElementsByClassName("box");
Array.from(boxes).forEach(element =>{
    let boxtext = element.querySelector('.boxtext');
    element.addEventListener('click', ()=>{
        if(boxtext.innerText ===''){
            boxtext.innerText =turn;
            turn = changeTurn();
            audioTurn.play();
            checkWin();
            if(!gameover){
            document.getElementsByClassName("info")[0].innerText = "Turn for "+ turn;
            }
        }
    })
})

//reset
reset.addEventListener('click',()=>{
  let   boxtexts =document.querySelectorAll('.boxtext')
  Array.from(boxtexts).forEach(element => {
    element.innerText =""
  })
  turn ="X"
  gameover = false
  document.querySelector(".line").style.width= "0"; 
  clearInterval(interval)
  document.getElementsByClassName("info")[0].innerText = "Turn for "+ turn;
  document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width="0px"
  
})