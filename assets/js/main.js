let wordUser = document.getElementById("name");
let check = document.getElementById("check");
let reverseHtml = document.getElementById("reverseWord");
let controlHtml = document.getElementById("controlV");
let reverseWord = "";

function isPalindrome(word) {
    word = word.toLowerCase(); 
    let length = word.length;
    
    for (let i = 0; i < Math.floor(length / 2); i++) {
        if (word[i] !== word[length - 1 - i]) {
            return false;
        }
    }
    return true;
}

function reverse(str) {
    let newString = "";
    for (let i = str.length - 1; i >= 0; i--) {
        newString += str[i];
    }
    return newString.toLowerCase();
}


check.addEventListener("click", function () {
    textUser = wordUser.value;
    let lowerWordUser = textUser.toLowerCase();
    console.log(lowerWordUser);
    
    reverseWord = reverse(lowerWordUser);
    reverseHtml.innerHTML = reverseWord;
    
    if (reverseWord == lowerWordUser) {
        controlHtml.innerHTML = "La parola usata è Palindroma"
        // console.log("la parola usata è Palindroma");
    } else {
        controlHtml.innerHTML = "La parola usata non è Palindroma"
        // console.log("la parola usata non è Palindroma");
    }
    
})

//==========================================================================

function randomNumber() {
    return Math.floor((Math.random()* 5)+1 )
}

let fight = document.getElementById("startGame");
let choiceUser = document.getElementById("evenOrAdd")
let numberUser = document.getElementById("numberUser")
let result = document.getElementById("result");

let yourNumber = document.querySelector(".yourNumber");
let pcNumber = document.querySelector(".pcNumber");
let winOrLose = document.querySelector(".winOrLose");


fight.addEventListener("click", function(){
    let choice = parseInt(choiceUser.value)
    let number = parseInt(numberUser.value)
    
    let computerNumber = randomNumber();
    pcNumber.innerHTML = computerNumber;
    yourNumber.innerHTML = numberUser.value

    let control = number + computerNumber;

    if (control %2 == choice) {
        winOrLose.innerHTML = control + " = hai vinto";
        winOrLose.style.backgroundColor = "green";
    } else {
        winOrLose.innerHTML = control + " = hai perso";
        winOrLose.style.backgroundColor = "red";
    }

})




