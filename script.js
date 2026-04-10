let score = 0;
let timeLeft = 40;
let currentIndex = -1;
let gameTimer;
let spawnTimer;

const cells = document.querySelectorAll(".cell");

// スタート
function startGame(){
    score = 0;
    timeLeft = 40;

    document.getElementById("score").innerText = "⭐ 0";
    document.getElementById("time").innerText = "⏱ 40";

    // タイマー
    gameTimer = setInterval(()=>{
        timeLeft--;
        document.getElementById("time").innerText = "⏱ " + timeLeft;

        if(timeLeft <= 0){
            endGame();
        }
    },1000);

    // 出現
    spawnTimer = setInterval(spawnSitom, 700);
}

// 出現
function spawnSitom(){
    // 全消し
    cells.forEach(cell => cell.innerHTML = "");

    const index = Math.floor(Math.random() * cells.length);
    currentIndex = index;

    const img = document.createElement("img");
    img.src = "Mogura.SITM.png";

    img.onclick = () => {
        score++;
        document.getElementById("score").innerText = "⭐ " + score;
        cells[index].innerHTML = "";
    };

    cells[index].appendChild(img);
}

// 終了
function endGame(){
    clearInterval(gameTimer);
    clearInterval(spawnTimer);

    document.querySelectorAll(".cell").forEach(c => c.innerHTML = "");

    const result = document.getElementById("resultScreen");
    const text = document.getElementById("resultText");

    if(score >= 45){
        text.innerText = "やるやん";
    }else{
        text.innerText = "がんばれ！";
    }

    result.style.display = "flex";
}

// 起動
window.onload = () => {
    startGame();
};
