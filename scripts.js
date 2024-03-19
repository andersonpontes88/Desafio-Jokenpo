const result = document.querySelector(".result")
const myScore = document.querySelector("#human-score")
const machineScore = document.getElementById("machine-score")
const resetGame = document.querySelector("#reset-game")
const inputName = document.querySelector("#name-desafiador")
const selectAdver = document.querySelector("#name-advers")

let myScoreNumber = 0
let machineScoreNumber = 0

const playHuman = (humanChoice) => {

    playTheGame(humanChoice, playMachine())

}

const playMachine = () => {

    const choices = ["rock", "paper", "scissors"]
    const randomNumber = Math.floor(Math.random() * 3)

    return choices[randomNumber]
}

const playTheGame = (human, machine) => {


    if (human === machine) {
        document.getElementById("empate-img").style.display = 'flex'
        document.getElementById("goku-win").style.display = 'none'
        document.getElementById("you-win").style.display = 'none'

        result.innerHTML = "Deu empate"

    } else if (
        (human === 'paper' && machine === 'rock') ||
        (human === 'rock' && machine === 'scissors') ||
        (human === 'scissors' && machine === 'paper')) {
        document.getElementById("empate-img").style.display = 'none'
        document.getElementById("you-win").style.display = 'flex'
        document.getElementById("goku-win").style.display = 'none'

        myScoreNumber++
        myScore.innerHTML = myScoreNumber

        result.innerHTML = "Voçê GANHOU!"
        
    } else {
        document.getElementById("empate-img").style.display = 'none'
        document.getElementById("you-win").style.display = 'none'
        document.getElementById("goku-win").style.display = 'flex'

        machineScoreNumber++
        machineScore.innerHTML = machineScoreNumber

        result.innerHTML = "Voçê PERDEU para o Goku!"
    }

    if (
        (human === 'paper' && machine === 'rock')) {
        document.getElementById("scissors").style.display = 'none'
    } else {
        document.getElementById("scissors").style.display = 'flex'
    }
    if (
        (human === 'paper' && machine === 'scissors')) {
        document.getElementById("rock").style.display = 'none'
    } else {
        document.getElementById("rock").style.display = 'flex'
    }


    if (
        (human === 'rock' && machine === 'scissors')) {
        document.getElementById("paper").style.display = 'none'
    } else {
        document.getElementById("paper").style.display = 'flex'
    }
    if (
        (human === 'rock' && machine === 'paper')) {
        document.getElementById("scissors").style.display = 'none'
    } else {
        document.getElementById("scissors").style.display = 'flex'
    }


    if (
        (human === 'scissors' && machine === 'rock')) {
        document.getElementById("paper").style.display = 'none'
    } else {
        document.getElementById("paper").style.display = 'flex'
    }
    if (
        (human === 'scissors' && machine === 'paper')) {
        document.getElementById("rock").style.display = 'none'
    } else {
        document.getElementById("rock").style.display = 'flex'
    }

}

function newGame() {


    machineScore.innerHTML = 0
    myScore.innerHTML = 0
    result.innerHTML = ""
    document.getElementById("empate-img").style.display = 'none'
    document.getElementById("you-win").style.display = 'none'
    document.getElementById("goku-win").style.display = 'none'
    document.getElementById("rock").style.display = 'flex'
    document.getElementById("paper").style.display = 'flex'
    document.getElementById("scissors").style.display = 'flex'

}


