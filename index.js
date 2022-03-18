let userVariable = document.getElementById("userText");
let printUser = document.getElementById("tableBody");
let saveTextButton = document.getElementById("saveForUser");
const names = [
  "name1",
  "name2",
  "name3",
  "name4",
  "name5",
  "name6",
  "name7",
  "name8",
  "name9",
  "name10",
];
const numberOfAttempt = [
  "#1",
  "#2",
  "#3",
  "#4",
  "#5",
  "#6",
  "#7",
  "#8",
  "#9",
  "#10",
];
const points = [
  "point1",
  "point2",
  "point3",
  "point4",
  "point5",
  "point6",
  "point7",
  "point8",
  "point9",
  "point10",
];
let namesindex = 0;
let scoredPoints = 0;
let savedPlayers = 0;
function saveUserName() {
  document.getElementById("error").innerHTML = ''
  savedPlayers += 1;
  document.getElementById(`${names[namesindex]}`).innerHTML = userVariable.value;
  document.getElementById(`${numberOfAttempt[namesindex]}`).innerHTML = namesindex + 1;
  namesindex += 1;
  scoredPoints = 0;
  userVariable.value = null;
  
}
saveTextButton.addEventListener("click", saveUserName);

userVariable.addEventListener("keyup", function (KeyboardEvent) {
  if (KeyboardEvent.keyCode === 13) {
    saveTextButton.click();
  }
});


let refreshButton = document.getElementById("refresh");
function refreshPage() {
  document.location.reload();
  namesindex = 0;
}
refreshButton.addEventListener("click", refreshPage);



function checkedRadioButton(checkedId) {
  document.getElementById(checkedId).checked = true;
}

const computerChoices = ["rock", "paper", "scissors"];
const userChoices = {
  rock: '<img src="/images/rock.png" width="auto" height="auto"max-width: 70px" max-height: 70px>',
  paper:
    '<img src="/images/paper.png" width="auto" height="auto"max-width: 70px" max-height: 70px>',
  scissors:
    '<img src="/images/scissors.png" width="auto" height="auto"max-width: 70px" max-height: 70px>',
};
function userChoice(choice) {
  if (savedPlayers === 0) {
      document.getElementById("error").innerHTML = 'Register first!'
      return;
  }
  let computer = computerChoices[Math.floor(Math.random() * 3)];
  document.getElementById("user").innerHTML = userChoices[choice];
  document.getElementById("computer").innerHTML = userChoices[computer];
    if (choice === computer) {
      document.getElementById("dot").innerText = "Tie " + "!";
      scoredPoints += 1;
      document.getElementById(`${points[namesindex - 1]}`).innerHTML = 
        scoredPoints;
    }
    if (choice === "rock") {
      if (computer === "paper") {
        document.getElementById("dot").innerText = "You lost " + "!";
        scoredPoints -= 2;
        document.getElementById(`${points[namesindex - 1]}`).innerHTML =
          scoredPoints;
      }
      if (computer === "scissors") {
        document.getElementById("dot").innerText = "You won " + "!";
        scoredPoints += 2;
        document.getElementById(`${points[namesindex - 1]}`).innerHTML =
          scoredPoints;
      }
    }
    if (choice === "paper") {
      if (computer === "rock") {
        document.getElementById("dot").innerText = "You won " + "!";
        scoredPoints += 2;
        document.getElementById(`${points[namesindex - 1]}`).innerHTML =
          scoredPoints;
      }
      if (computer === "scissors") {
        document.getElementById("dot").innerText = "You lost " + "!";
        scoredPoints -= 2;
        document.getElementById(`${points[namesindex - 1]}`).innerHTML =
          scoredPoints;
      }
    }
    if (choice === "scissors") {
      if (computer === "rock") {
        document.getElementById("dot").innerText = "You lost " + "!";
        scoredPoints -= 2;
        document.getElementById(`${points[namesindex - 1]}`).innerHTML =
          scoredPoints;
      }
      if (computer === "paper") {
        document.getElementById("dot").innerText = "You won " + "!";
        scoredPoints += 2;
        document.getElementById(`${points[namesindex - 1]}`).innerHTML =
          scoredPoints;
      }
    }
  
}
