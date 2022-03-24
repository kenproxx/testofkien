var healthPoints = 100;
var myGunSound = new Audio("audio/3z.m4a");
var enemyGunSound = new Audio("audio/enemySound.mp3");
enemyGunSound.volume = .6;

var music = new Audio("audio/music.mp3");
music.loop = true;

function updateHealthPoints(points) {

    healthPoints = points;
    var healthBar = document.querySelector("#healthBar");
    healthBar.style.width = points + "%";

    if(healthPoints < 1) {
        alert("Game over!");
        window.location.reload();
    }

}

function newGame() {
    document.querySelector("button").style.display = "none";
    randomEnemyAttacks();
    music.play();
}

function livingEnemies() {
    return document.querySelectorAll(".enemy:not(.dead)");
}


function iShoot(enemy) {
    enemy.classList.add("dead");

    if(!livingEnemies().length) {
        setTimeout(function() {
            alert("You win!");
            window.location.reload();
        }, 1000);
    }

}


function enemyAttacksMe(enemy) {

    enemy.classList.add("showing");

    setTimeout(()=> {
        enemyShootsMe(enemy);
    }, 1000);

    setTimeout(()=> {
        enemy.classList.remove("showing");
    }, 3000);

}


function enemyShootsMe(enemy) {

    if(!enemy.classList.contains("dead")) {

        enemyGunSound.play();

        enemy.classList.add("shooting");
        updateHealthPoints(healthPoints - 20);

        setTimeout(()=> {
            enemy.classList.remove("shooting");
        }, 500);

    }

}


function randomEnemyAttacks() {

    var randomEnemyNo = Math.random() * livingEnemies().length;
    randomEnemyNo = Math.floor(randomEnemyNo);
    var enemy = livingEnemies()[randomEnemyNo];

    var randomDelay = Math.random() * 2000 + 1000;

    setTimeout( ()=> {
        enemyAttacksMe(enemy);
        randomEnemyAttacks();
    }, randomDelay);

}