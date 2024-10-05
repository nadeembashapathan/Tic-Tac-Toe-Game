let buttons=document.querySelectorAll(".btn");
let msg=document.querySelector(".inmsg");
let rstBtn=document.querySelector("#rst");

let winPatterns=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
];
let turnX=true;
buttons.forEach((val)=>{
    val.addEventListener("click",()=>{
        if(turnX){
            val.innerText="X";
            val.disabled=true;
            turnX=false;
        }else{
            val.innerText="O";
            val.disabled=true;
            turnX=true;
        }
        checkwin();
        val.style.backgroundColor="darkgrey";
    });
});

//defining the winning condition
let checkwin=()=>{
    for(let i of winPatterns){
        let a=buttons[i[0]].innerText;
        let b=buttons[i[1]].innerText;
        let c=buttons[i[2]].innerText;
        if(a!=="" && b!=="" && c!==""){
            if(a===b && b===c){
                messageShown(a);
            }
        }
    }
}


//winningMessage shown on the screen/webpage
let messageShown=(a)=>{
    msg.innerText=`Congrtulations! ${a} won the Game`;
    disablingButtons();
}


//reset button function
let resetting=()=>{
    buttons.forEach((R)=>{
        R.innerText="";
        enablingButtons();
        msg.innerText="Start the Game";
        R.style.backgroundColor="#000000";
    });
};
rstBtn.addEventListener("click",resetting);



//disabling buttons
let disablingButtons=()=>{
    for(let d of buttons){
        d.disabled=true;
    }
}

//enabling buttons
let enablingButtons=()=>{
    for(let e of buttons){
        e.disabled=false;
    }
}