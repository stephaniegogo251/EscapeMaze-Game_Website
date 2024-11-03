//Array to create the maze (0 - walls and 1 - path)
let mazearray = [
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [2,1,1,1,1,1,1,1,1,1,1,0,1,1,1,0,1,1,1,1,1,1,1,1,1,1,1,0,0],
    [1,1,1,1,1,1,1,1,1,1,1,0,1,1,1,0,1,1,1,1,1,1,1,1,1,1,1,0,0],
    [0,0,0,0,1,0,0,0,0,0,1,0,1,0,1,0,0,0,0,0,0,0,0,0,1,0,1,0,0],
    [0,0,0,0,1,0,0,0,0,0,1,0,1,0,1,0,0,0,0,0,0,0,0,0,1,0,1,0,0],
    [0,0,1,1,1,0,1,1,1,1,1,0,1,0,1,1,1,1,1,0,1,1,1,1,1,0,1,0,0],
    [0,0,1,1,1,0,1,1,1,1,1,0,1,0,1,1,1,1,1,0,1,1,1,1,1,0,1,0,0],
    [0,0,1,0,0,0,0,0,0,0,1,0,1,0,0,0,0,0,1,0,1,0,0,0,0,0,1,0,0],
    [0,0,1,0,0,0,0,0,0,0,1,0,1,0,0,0,0,0,1,0,1,0,0,0,0,0,1,0,0],
    [0,0,1,1,1,1,1,1,1,0,1,1,1,0,1,1,1,0,1,1,1,1,1,1,1,0,1,0,0],
    [0,0,1,1,1,1,1,1,1,0,1,1,1,0,1,1,1,0,1,1,1,1,1,1,1,0,1,0,0],
    [0,0,1,0,0,0,0,0,1,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,1,0,1,0,0],
    [0,0,1,0,0,0,0,0,1,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,1,0,1,0,0],
    [0,0,1,0,1,1,1,0,1,1,1,1,1,0,1,1,1,1,1,1,1,1,1,1,1,0,1,0,0],
    [0,0,1,0,1,1,1,0,1,1,1,1,1,0,1,1,1,1,1,1,1,1,1,1,1,0,1,0,0],
    [0,0,1,0,0,0,1,0,0,0,0,0,1,0,1,0,1,0,0,0,0,0,1,0,0,0,1,0,0],
    [0,0,1,0,0,0,1,0,0,0,0,0,1,0,1,0,1,0,0,0,0,0,1,0,0,0,1,0,0],
    [0,0,1,1,1,1,1,0,1,1,1,0,1,0,1,0,1,1,1,1,1,0,1,0,1,1,1,0,0],
    [0,0,1,1,1,1,1,0,1,1,1,0,1,0,1,0,1,1,1,1,1,0,1,0,1,1,1,0,0],
    [0,0,0,0,0,0,1,0,1,0,1,0,1,0,1,0,0,0,0,0,1,0,0,0,1,0,0,0,0],
    [0,0,0,0,0,0,1,0,1,0,1,0,1,0,1,0,0,0,0,0,1,0,0,0,1,0,0,0,0],
    [0,0,1,1,1,0,1,0,1,0,1,0,1,0,1,0,1,1,1,1,1,0,1,1,1,1,1,0,0],
    [0,0,1,1,1,0,1,0,1,0,1,0,1,0,1,0,1,1,1,1,1,0,1,1,1,1,1,0,0],
    [0,0,1,0,0,0,1,0,1,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0],
    [0,0,1,0,0,0,1,0,1,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0],
    [0,0,1,1,1,1,1,0,1,1,1,0,1,0,1,1,1,0,1,1,1,0,1,1,1,1,1,0,0],
    [0,0,1,1,1,1,1,0,1,1,1,0,1,0,1,1,1,0,1,1,1,0,1,1,1,1,1,0,0],
    [0,0,1,0,0,0,0,0,0,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,0,0,0,0,0],
    [0,0,1,0,0,0,0,0,0,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,0,0,0,0,0],
    [0,0,1,1,1,1,1,1,1,0,1,0,1,1,1,0,1,1,1,0,1,0,1,1,1,1,1,0,0],
    [0,0,1,1,1,1,1,1,1,0,1,0,1,1,1,0,1,1,1,0,1,0,1,1,1,1,1,0,0],
    [0,0,0,0,0,0,0,0,1,0,1,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,1,0,1,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0],
    [0,0,1,1,1,1,1,0,1,1,1,0,1,1,1,1,1,0,1,1,1,0,1,1,1,1,1,0,0],
    [0,0,1,1,1,1,1,0,1,1,1,0,1,1,1,1,1,0,1,1,1,0,1,1,1,1,1,0,0],
    [0,0,1,0,0,0,0,0,0,0,1,0,1,0,0,0,0,0,1,0,0,0,1,0,0,0,1,0,0],
    [0,0,1,0,0,0,0,0,0,0,1,0,1,0,0,0,0,0,1,0,0,0,1,0,0,0,1,0,0],
    [0,0,1,1,1,1,1,1,1,0,1,0,1,0,1,1,1,1,1,0,1,1,1,0,1,0,1,0,0],
    [0,0,1,1,1,1,1,1,1,0,1,0,1,0,1,1,1,1,1,0,1,1,1,0,1,0,1,0,0],
    [0,0,1,0,0,0,1,0,1,0,1,0,1,0,1,0,0,0,1,0,1,0,0,0,1,0,1,0,0],
    [0,0,1,0,0,0,1,0,1,0,1,0,1,0,1,0,0,0,1,0,1,0,0,0,1,0,1,0,0],
    [0,0,1,0,1,0,1,0,1,0,1,1,1,0,1,0,1,1,1,0,1,0,1,0,1,1,1,0,0],
    [0,0,1,0,1,0,1,0,1,0,1,1,1,0,1,0,1,1,1,0,1,0,1,0,1,1,1,0,0],
    [0,0,1,1,1,0,1,0,1,0,0,0,0,0,1,0,1,0,1,0,1,0,1,0,0,1,1,0,0],
    [0,0,1,1,1,0,1,0,1,0,0,0,0,0,1,0,1,0,1,0,1,0,1,0,0,1,1,0,0],
    [0,0,0,0,1,0,1,0,1,0,0,0,0,0,1,0,1,0,0,0,1,0,1,0,0,1,1,0,0],
    [0,0,0,0,1,0,1,0,1,0,0,0,0,0,1,0,1,0,0,0,1,0,1,0,0,1,1,0,0],
    [0,0,1,1,1,0,1,1,1,1,1,1,1,1,1,0,1,1,1,1,1,1,1,1,1,1,1,1,3],
    [0,0,1,1,1,0,1,1,1,1,1,1,1,1,1,0,1,1,1,1,1,1,1,1,1,1,1,1,3],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
];

let maze = document.getElementById("maze-container");
let red = document.getElementById("red");

function createMaze() {
    //Looping through each row
    for (let s = 0; s < mazearray.length; s++){
        let row = document.createElement("div");
        row.classList.add("row"); //div element is created for each row and has a class of "row"

        //Looping through each cell in a specific row [s]
        for (let t = 0; t < mazearray[s].length; t++){
            let cell = document.createElement("div"); //div element is created for each cell

            if (mazearray[s][t] == 0){
                cell.classList.add("wall"); //if the maze array element is 0, the cell has a class of "wall"
            }
            else {
                cell.classList.add("empty"); //else it has the class of "empty"
            }
            row.appendChild(cell); //adding the cell to the specific row
        }
        maze.appendChild(row); //adding each row to the maze container
    }
}

//Function that plays the audio to warn players about the griever
function grieverCloseBy() {
    var audio2 = document.getElementById("griever_alert");
    audio2.play();
}

//Function that plays the audio for the game's background music
function gameMusic() {
    audio1 = document.getElementById("bg-music");
    audio1.play();
}

function gameFinish() {
    audio1.pause();
}

//Function to get the user's current position (Player's position is 2 in the maze)
function getUserPosition(){
    let position = []; //Storing the position in an array

    //Looping through the array to find the user's position
    for (let i = 0; i < mazearray.length; i++){
        for (let j = 0; j < mazearray[i].length; j++){
            if (mazearray[i][j] == 2){ //if maze array element is 2, the player is located there
                position[0] = i;
                position[1] = j;
            }
        }
    }
    return position; //returning position to be used in other functions
}

//Function that helps in updating the score of the user with the highest score
function updateScore(state) {
    let user_records = [];

    //Retrieve user data from localStorage
    let storedUsers = localStorage.getItem("users");

    //Parses the stored data if it exists
    if (storedUsers) {
        user_records = JSON.parse(storedUsers);
    }

    //Check if the logged-in user exists in sessionStorage
    let loggedInUser = sessionStorage.getItem("loggedinUser");

    if (loggedInUser) {
        for (let i = 0; i < user_records.length; i++) {
            // Check if the user name matches
            if (user_records[i]["name"] === loggedInUser) {
                //Gets the current score of the user from local storage
                let currentScore = user_records[i]["score"];

                // Update score based on state (State is provided in the userStatus function)
                if (state === 1) {
                    newScore = (parseInt(correctAns) * 500) + 1000;
                } else if (state === 0) {
                    newScore = parseInt(correctAns) * 500;
                } else {
                   newScore = 100;
                }

                //Compares current score and new score of user. 
                if (currentScore < newScore) {
                    user_records[i]["score"] = newScore; //Updates score only if new score is new score is greater than current score                   
                }
                else {
                    return;
                }
                break;
            }
        }

        //Saves the updated user records in localStorage
        localStorage.setItem("users", JSON.stringify(user_records));
    }
}


qnAns = 0; //Number of questions answered by player
timeLeft = countDown(); //Time left for the game to end (return value of countDown() function)

function userStatus() {
    let userPosition = getUserPosition(); //position of user in the maze

    //if user has escaped the maze on time and has answered all questions they get bonus points of 1000
    if ((userPosition[0] == 49) && (userPosition[1] == 28) && timeLeft >= 0 && qnAns == 5){
        gameFinish();
        alert("You have successfully escaped the maze! You got " + ((parseInt(correctAns)*500)+1000) + " pts");
        clearInterval(displayStatus); //stops interval of displayStatus function
        updateScore(1);
        window.location.assign("./leaderboard.html"); //redirects page to home page
    }
    
    //if user escapes the maze and has time left but has not answered all the questions, the user cannot escape the maze
    else if ((userPosition[0] == 49) && (userPosition[1] == 28) && timeLeft > 0 && qnAns != 5){
        alert("Complete all riddles to escape the maze!");
        clearInterval(displayStatus);
        displayStatus = setInterval(userStatus, 1000); //restarts interval of displayStatus function
    }

    //if user escapes the maze on time but has not anwered all the questions, they are not given the bonus point
    else if ((userPosition[0] == 49) && (userPosition[1] == 28) && timeLeft == 0 && qnAns < 5){
        gameFinish();
        alert("You have " + correctAns * 500 + " pts.")
        clearInterval(displayStatus);
        updateScore(0);
        window.location.assign("./leaderboard.html");
    }

    //if the user could not escape the maze on time (whether or not they've answered all questions), they get 0 points (the griever caught them)
    else if ((userPosition[0] != 49) && (userPosition[1] != 28) && timeLeft == 0){
        gameFinish();
        alert("Game Over!");
        clearInterval(displayStatus);
        window.location.assign("./leaderboard.html");
    }

    else {
        return false;
    }
}

setInterval(getUserPosition,500); //user position function is run every 500ms
let displayStatus = setInterval(userStatus, 1000); //user status function is run every second and interval is stored in a variable

//Below function is used for player's movements using event listener for keydown where k is the key pressed
document.addEventListener("keydown", function(k) {
    let player = document.getElementById("red"); //stores player element
    let playerTop = player.offsetTop; //stores distance of player from the top of the window
    let playerLeft = player.offsetLeft; //stores distance of player from the left of the window
    let userPosition = getUserPosition(); //stores user's current position
    let moveSize = 15; //distance to be changed for up and down movements
    let moveSize2 = 25; ////distance to be changed for left and right movements

    //Changes user's position when right arrow key is pressed
    if (k.key == "ArrowRight" && 
    playerLeft < ((mazearray.length - 1)*moveSize2) &&
    (mazearray[userPosition[0]][userPosition[1]+1] == 1 || mazearray[userPosition[0]][userPosition[1]+1] == 3)){
        playerLeft += moveSize2;
        player.style.left = playerLeft + "px";
        mazearray[userPosition[0]]
                  [userPosition[1]] = 1; //changes current position of element in maze to 1
        mazearray[userPosition[0]]
                  [userPosition[1]+1] = 2; //changes position the player moves to as 2 in the maze
    }

    //Changes user's position when left arrow key is pressed
    else if (k.key == "ArrowLeft" &&
        playerLeft > 0 &&
        mazearray[userPosition[0]]
        [userPosition[1]-1] == 1){
            playerLeft -= moveSize2;
            player.style.left = playerLeft + "px";
            mazearray[userPosition[0]]
                    [userPosition[1]] = 1;
            mazearray[userPosition[0]]
                    [userPosition[1]-1] = 2;
    }

    //Changes user's position when up arrow key is pressed
    else if (k.key == "ArrowUp" &&
        playerTop > 0 &&
        mazearray[userPosition[0]-1]
        [userPosition[1]] == 1){
            playerTop -= moveSize;
            player.style.top = playerTop + "px";
            mazearray[userPosition[0]]
                    [userPosition[1]] = 1;
            mazearray[userPosition[0]-1]
                    [userPosition[1]] = 2;
    }

    //Changes user's position when down arrow key is pressed
    else if (k.key == "ArrowDown" &&
        playerTop < ((mazearray.length - 1)*moveSize) &&
        mazearray[userPosition[0]+2]
        [userPosition[1]] == 1){
            playerTop += moveSize;
            player.style.top = playerTop + "px";
            mazearray[userPosition[0]]
                    [userPosition[1]] = 1;
            mazearray[userPosition[0]+1]
                    [userPosition[1]] = 2;
    }

    //Exits the game and redirects page to home page if Escape key is pressed
    else if (k.key == "Escape"){
        alert("You are now exiting the game!");
        window.location.assign("./home.html");
    }

    else {
        return false;
    }
});

correctAns = 0; //Stores correctly answered questions
wrongAns = 0; //Stores questions answered wrong
qnAns = correctAns + wrongAns; //adds up the above 2 variables

//Function to display the riddle when user comes in the same position as the specific riddle
function displayQuiz() {
    let position = getUserPosition();
    qn = document.getElementById("q1"); //defines "qn" as 1st question
    ans = document.getElementById("resp1");
    riddle = document.getElementById("riddle1");

    //if user is in the same position as riddle 1
    if ((position[0] == 3) && (position[1] == 16)){
        riddle.style.opacity = "0.5"; //riddle element dims (to indicate that it has been opened/answered)
        qn.style.display = "block"; //changes style of qn from none to block
        ans = document.getElementById("resp1").value.toLowerCase(); //user's answer (in lowercase) is stored as ans
        clearInterval(displayQn); //clears interval to stop question from being displayed multiple times before it is answered
        return ans; //user's answer is returned
    }

    //if user is in the same position as riddle 2
    else if ((position[0] == 23) && (position[1] == 4)){
        qn = document.getElementById("q2"); //changes value of qn to second qn
        riddle = document.getElementById("riddle2"); //changes current riddle to second riddle
        riddle.style.opacity = "0.5";
        qn.style.display = "block";
        ans = document.getElementById("resp2").value.toLowerCase();
        clearInterval(displayQn);
        return ans;
    }

    //if user is in the same position as riddle 3
    else if ((position[0] == 31) && (position[1] == 26)){
        qn = document.getElementById("q3");
        riddle = document.getElementById("riddle3");
        riddle.style.opacity = "0.5";
        qn.style.display = "block";
        ans = document.getElementById("resp3").value.toLowerCase();
        clearInterval(displayQn);
        return ans;
    }

    //if user is in the same position as riddle 4
    else if ((position[0] == 35) && (position[1] == 16)){
        qn = document.getElementById("q4");
        riddle = document.getElementById("riddle4");
        riddle.style.opacity = "0.5";
        qn.style.display = "block";
        ans = document.getElementById("resp4").value.toLowerCase();
        clearInterval(displayQn);
        return ans;
    }

    //if user is in the same position as riddle 5
    else if ((position[0] == 49) && (position[1] == 2)){
        qn = document.getElementById("q5");
        riddle = document.getElementById("riddle5");
        riddle.style.opacity = "0.5";
        qn.style.display = "block";
        ans = document.getElementById("resp5").value.toLowerCase();
        clearInterval(displayQn);
        return (ans);
    }

    else {
        return false;
    }
}

//Display Question function is run every second 
displayQn = setInterval(displayQuiz, 1000);

//Function that validates or checks user's answer
function checkAnswer() {
    ans = displayQuiz(); //user's answer returned from display quiz function

    //if it's the first question
    if (qn.id == "q1"){
        answer = document.getElementById("correct1").innerHTML.toLowerCase(); //stores the right answer
        wrong1 = document.getElementById("q1w1").innerHTML.toLowerCase(); //stores the other option (wrong)
        wrong2 = document.getElementById("q1w2").innerHTML.toLowerCase(); //stores the other option (wrong)
        wrong3 = document.getElementById("q1w3").innerHTML.toLowerCase(); //stores the other option (wrong)
    }

    //if it's the second question
    else if (qn.id == "q2"){
        answer = document.getElementById("correct2").innerHTML.toLowerCase();
        wrong1 = document.getElementById("q2w1").innerHTML.toLowerCase();
        wrong2 = document.getElementById("q2w2").innerHTML.toLowerCase();
        wrong3 = document.getElementById("q2w3").innerHTML.toLowerCase();
    }

    //if it's the third question
    else if (qn.id == "q3"){
        answer = document.getElementById("correct3").innerHTML.toLowerCase();
        wrong1 = document.getElementById("q3w1").innerHTML.toLowerCase();
        wrong2 = document.getElementById("q3w2").innerHTML.toLowerCase();
        wrong3 = document.getElementById("q3w3").innerHTML.toLowerCase();
    }

    //if it's the fourth question
    else if (qn.id == "q4"){
        answer = document.getElementById("correct4").innerHTML.toLowerCase();
        wrong1 = document.getElementById("q4w1").innerHTML.toLowerCase();
        wrong2 = document.getElementById("q4w2").innerHTML.toLowerCase();
        wrong3 = document.getElementById("q4w3").innerHTML.toLowerCase();
    }

    //if it's the fifth question
    else if (qn.id == "q5"){
        answer = document.getElementById("correct5").innerHTML.toLowerCase();
        wrong1 = document.getElementById("q5w1").innerHTML.toLowerCase();
        wrong2 = document.getElementById("q5w2").innerHTML.toLowerCase();
        wrong3 = document.getElementById("q5w3").innerHTML.toLowerCase();
    }

    else {
        return false;
    }

    //if the user's answer matches the actual answer (correct)
    if (ans == answer){
        correctAns += 1;
    }

    //if the user hasn't typed from the options (correct or wrong)
    else {
        //if the user has typed either of the wrong answers
        if ((ans == wrong1) || (ans == wrong2) || ans == wrong3) {
            wrongAns += 1;
        }
        //if user enters nothing and submits, an alert is sent
        else if (ans == ""){
            alert("Please enter your answer to continue the maze!");
            return false;
        }
        //if user types something other than the options given
        else {
            alert("Please type your answer from the choices given!");
            return false;
        }
    }

    qnAns = correctAns + wrongAns; //updates questions attempted by user
    qn.style.display = "none"; //stops displays the question / riddle
    displayQn = setInterval(displayQuiz, 2000); //starts running the function again
}

//sets start time and running time for for countdown() function
setTimeout(() => {
    countdownTimer = setInterval(countDown, 1000); //runs every second
}, 4000); //starts it's run time after 4 seconds (after the pre-game screen)

//Function that displays timer for the game
function countDown() {
    timer = document.getElementById("timer"); //gets timer element from maze.html
    timeLeft = parseInt(timer.innerHTML); //converts timer element to numerical value (integer)
    timeLeft--; //decrements timer by 1
    
    //if timer hits 0, function stops running
    if (timeLeft == 0){
        clearInterval(countdownTimer);
    }

    //Plays audio of grievers every 20 seconds to warn the players
    if (timeLeft % 20 == 0){
        grieverCloseBy();
    }

    //if the timer is more than 10
    if (timeLeft >= 10){
        timer.innerHTML = timeLeft; //changes timer element to timeleft
    }

    //if timer is less than 10
    else {
        timer.innerHTML = "0"+timeLeft; //changes timer and adds 0 to timeleft (9 to 09)
    }

    return timeLeft; //returns timeleft to check in display status function
}

let countdownFinished = false; //stores if countdown has finished or not

function preGame() {
    const screen = document.getElementById("pre-game");
    const counter = document.getElementById("counter");
    let countdown = parseInt(counter.innerHTML);

    if (!countdownFinished) {
        if (countdown > 1) {
            countdown--; //decrements countdown value by 1 (3-2-1)
            counter.innerHTML = countdown;
        } else {
            counter.innerText = "START!"; //if timer hits 1, it's changed to START!
            countdownFinished = true; // Mark the countdown as finished
        }
    } else {
        screen.style.display = "none"; //hides the countdown screen when countdown is over
        clearInterval(preGameLoader); // Stop the interval
        gameMusic(); //starts game's background music
    }
}

//runs countdown screen every second
let preGameLoader = setInterval(preGame, 1000);

//
window.onload = function() {
    createMaze(); //runs create maze function after screen is loaded
}
