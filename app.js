let gameseq = [];
let userSeq = [];

let btns = ["yellow", "red", "blue", "green"]
let h2 = document.querySelector("h2");

let started = false;
let level = 0;

document.addEventListener("keypress", function(){
    if(started == false){
        console.log("Game Started");
    }

    started = true;

    levelUp();
});

function gameFlash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash");
    }, 250);
}
function userFlash(btn){
    btn.classList.add("userFlash");
    setTimeout(function(){
        btn.classList.remove("userFlash");
    }, 250);
}

function levelUp() {
    userSeq=[];
    level++;
    h2.innerText = `Level ${level}`;

    let randomIdx=Math.floor(Math.random() * 4);
    let randomColor = btns[randomIdx];
    let randomBtns = document.querySelector(`.${randomColor}`);
    gameseq.push(randomColor);
    console.log(gameseq);
    gameFlash(randomBtns);
}

function check(idx){
    if(userSeq[idx] == gameseq[idx]){
        if(userSeq.length == gameseq.length){
           setTimeout(levelUp, 800);
        }
    } else {
        h2.innerHTML = `Game Over!Your score is : <b>${level}<b> <br> Press any key to restart`;
            document.querySelector("body").style.backgroundColor = "red";
        setTimeout(function(){
            document.querySelector("body").style.backgroundColor = "white";
        }, 100);
        reset();
    }
}

function btnPressed(){
    let btn = this;
    userFlash(btn);

    userColor = btn.getAttribute("id");
    userSeq.push(userColor);

    check(userSeq.length-1);
}

let allBtns = document.querySelectorAll(".btn");
    for(btn of allBtns){
        btn.addEventListener("click", btnPressed);
    }


function reset(){
    started = false;
    gameseq = [];
    userSeq = [];
    level = 0;
}