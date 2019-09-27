var answer1 = ["C) Bill & Ted's Excellent Adventure"] 
var answer2 = ["A) River's Edge"]
var answer3 = ["B) Whoa"] 
var answer4 = ["C) Sandra Bullock"]
var answer5 = ["D) Beirut, Lebanon"];
var playerGuess;
var playerScore = 0;



//setting time starting number
var timeCount = 30;
//timer id use what you've got but this basically prints out your starting number
$("#countDown").text(timeCount);
//creates a block of code to run at a set interval
var timerQuestion = setInterval(
    //this is the code that will be repeated
    function() {
        timeCount--; // count = (count - 1)
        $("#countDown").text(timeCount); //updates the html
        //this might need to be set to -1, not sure
        if(timeCount === 0) {
            clearInterval(timerQuestion); //stops the timer named timerQuestion
        }
  }, 1000 //this is the interval time (time before the code will run again) in milliseconds
);

