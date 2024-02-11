let computerNum = 0;
let playBtn = document.querySelector("#playBtn");
let userInput = document.querySelector("#userInput");
let result = document.querySelector("#result")
let resetBtn = document.querySelector("#resetBtn");
let chance = 5;
let chanceArea = document.querySelector("#chanceArea");  
let history = [];

function pickRandomNum(){
    computerNum = Math.floor( (Math.random()*100)+1 );
    console.log(computerNum);
}

function play(){
    let userValue = userInput.value

    if(userValue<1 || userValue > 100){
        result.textContent = "1~100 사이의 숫자를 입력하시오.";
        return;
    }
    if(history.includes(userValue)){
        result.textContent = "이미 입력된 숫자입니다.";
        return;
    }

    chance--;
    chanceArea.textContent = `남은 기회 : ${chance}`

    if(userValue > computerNum){
        result.textContent = "Down"
    }else if(userValue < computerNum){
        result.textContent = "Up"
    }else{
        result.textContent = "정답"
        playBtn.disabled = true;
    }

    history.push(userValue);

    if(chance === 0){
        playBtn.disabled = true;
    }
}

function reset(){
    userInput.value = ""
    playBtn.disabled = false;
    history = []
    chance = 5
    pickRandomNum();
    result.textContent = "결과 : "
    chanceArea.textContent = `남은 기회 : ${chance}`
}

pickRandomNum();
playBtn.addEventListener("click", play)
resetBtn.addEventListener("click", reset)
userInput.addEventListener("focus",()=> {userInput.value="";})
