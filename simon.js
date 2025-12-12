gameSeq=[];
userSeq=[];

let high =0;

let color = ["pink","sky","orange","purple"];
let level=0;
started= false;
h2 = document.querySelector("h2");

function gameFlash(btn){
    btn.classList.add("gameflash");
    setTimeout(()=>{
        btn.classList.remove("gameflash");
    },250);
}
//both are same
function userFlash(btn){
    btn.classList.add("userflash");
    setTimeout(()=>{
        btn.classList.remove("userflash");
    },250);
}

function levelup(){
    userSeq=[];
    level++;
    h2.innerText= `Level ${level}`;
    let ran = Math.floor(Math.random()*4);
    let col = color[ran];
    gameSeq.push(col);
    console.log(gameSeq);
    let btn = document.querySelector(`.${col}`);
    // console.log(ran);
    // console.log(col);
    console.log(btn);
    gameFlash(btn);
}

document.addEventListener("keypress",function(){
    if(started == false){
        console.log("stated");
        started= true;
        levelup();
    }
});

//user press
function btnpress(){
    let btn = this;
    userFlash(btn);
    let usercol = btn.getAttribute("id");
    console.log(usercol);
    userSeq.push(usercol);
    checkAns(userSeq.length-1);
}
let btns = document.querySelectorAll(".div");
for (btn of btns){
    btn.addEventListener("click",btnpress);
}

function checkAns(idx){
    if(userSeq[idx] == gameSeq[idx]){
        if(userSeq.length == gameSeq.length){
            setTimeout(levelup, 1000);
        }
    }else{
        if(high<level){
            high=level;
        }
        h2.innerHTML= `Game Over! Your score was <b>${level}</b> <br> Press any key to start again. <br> Your highest score till now is ${high} `;
        let body = document.querySelector("body");
        body.classList.add("wrong");
        setTimeout(()=>{
            body.classList.remove("wrong");
        },200);
        reset();
    }
}
function reset(){
    gameSeq=[];
    userSeq=[];
    level=0;
    started= false;
}