let newscore1 = 0;
let newscore2 = 0;
let totalGames = 0;
const score1 = document.getElementsByClassName("score1")[0];
const score2 = document.getElementsByClassName("score2")[0];

const yourChoice = document.getElementsByClassName("yourChoice")[0];
const compChoice = document.getElementsByClassName("compChoice")[0];

const btn1 = document.getElementsByClassName("rock")[0];
const btn2 = document.getElementsByClassName("paper")[0];
const btn3 = document.getElementsByClassName("scissor")[0];

const result = document.getElementsByClassName("result")[0];

const reset = document.getElementsByClassName("reset")[0];
const img1 = document.getElementsByClassName("pic1")[0];
const img2 = document.getElementsByClassName("pic2")[0];

let newRes;

const determineWinner = (yourChoice, compc) => {
    console.log(yourChoice, compc);
    if (yourChoice == compc) {
        newRes = "😶‍🌫️DRAW😶‍🌫️";
    }

    else if (
        (yourChoice == "Rock" && compc == "Scissor") ||
        (yourChoice == "Scissor" && compc == "Paper") ||
        (yourChoice == "Paper" && compc == "Rock")
    ) {
        newRes = "🎉WON🎉";
        newscore1++;
    }
    else {
        newRes = "🥲Lost🥲";
        newscore2++;
    }
    return newRes;

};

const comp = () => {
    let random = Math.trunc(Math.random() * 3) + 1;
    console.log(random);
    if (random === 1) {
        compChoice.innerText = "Rock";
        img2.src = "images/1.png";
    }
    else if (random === 2) {
        compChoice.innerText = "Paper";
        img2.src = "images/2.png";
    }
    else if (random === 3) {
        compChoice.innerText = "Scissor";
        img2.src = "images/3.png";
    }
    return compChoice;
};


if (btn1) {
    btn1.addEventListener("click", () => {
        console.log("Button 1 clicked");
        yourChoice.innerText = "Rock";
        // console.log(yourChoice.innerText);
        let compc = comp();
        // console.log(compc.innerText);
        let winner = determineWinner(yourChoice.innerText, compc.innerText);
        img1.src = "images/1.png";
        console.log(winner);
        result.innerText = winner;
        score1.innerText = newscore1;
        score2.innerText = newscore2;
        totalGames++;
    });
}

if (btn2) {
    btn2.addEventListener("click", () => {
        console.log("Button 2 clicked");
        yourChoice.innerText = "Paper";
        let compc = comp();
        let winner = determineWinner(yourChoice.innerText, compc.innerText);
        console.log(winner);
        img1.src = "images/2.png";
        result.innerText = winner;
        score1.innerText = newscore1;
        score2.innerText = newscore2;
        totalGames++;
    });
}

if (btn3) {
    btn3.addEventListener("click", () => {
        console.log("Button 3 clicked");
        yourChoice.innerText = "Scissor";
        let compc = comp();
        let winner = determineWinner(yourChoice.innerText, compc.innerText);
        console.log(winner);
        img1.src = "images/3.png";
        result.innerText = winner;
        score1.innerText = newscore1;
        score2.innerText = newscore2;
        totalGames++;
    });
}

if (reset) {
    reset.addEventListener("click", () => {
        alert(`Total Games you played =${totalGames},You Won=${newscore1}`);
        location.reload();
    });
}
