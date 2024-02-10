//Click on the start-reset button
  //if we are playing, reload the page
      //if we are not playing, Then set score to zero
        //show countdown box and reduce time by 1 sec in loops
              //timeleft?
                 //yes-continue
                 //no-gameover
        //change button to reset
        //generate nre Q/A



//If we click on answer box
  //if we are playing
     //correct or not?
       //yes, then increase the score and show correct answer for 1 sec
       //generate new Q/A

    //not correct, then show Try again box for 1 sec

var correctPosition;
var x,y,wrongAnswer;
var correctAnswer;
var timeremaining;
var action;
var playing=false;
var score;

document.getElementById("startreset").onclick=function(){
    if(playing==true){
        location.reload();     //to refresh the page
    }

    else{
        //reset the game or playing mode
        playing=true;
        score=0;
        document.getElementById("scoreValue").innerHTML=score;

        unhide("timeremaining");
        //document.getElementById("timeremaining").style.display="block";  //to display the countdown box
        timeremaining=60;

        document.getElementById("timeRemainingValue").innerHTML=timeremaining;
        hide("gameover");

        document.getElementById("startreset").innerHTML="Reset Game";
        startCountdown();    //calling the function to start the counter
        generateQuestionAnswers();  //calling the function to start the questionaire

    }
}



for(i=1; i<5; i++){
document.getElementById("box"+i).onclick = function(){
    //check if we are playing
    if(playing == true){
        //if answer is correct
        // if(this.innerHTML == correctAnswer){
        //     score++;
            
        //     document.getElementById("scoreValue").innerHTML = score;
        //     //hide the wrong box and show the correct box
        //     hide("wrong");
        //     unhide("correct");
        //     setTimeout(function(){hide("correct");} ,1000);

        //     //generate new question when ansswer is correct
        //     generateQuestionAnswers();

        // }
        // //if answer is wrong
        // else {
        //     hide("correct");
        //     unhide("wrong");
        //     setTimeout(function(){hide("wrong");} ,1000);
            
        // }

        if(this.innerHTML != correctAnswer){
            score+=1;
            document.getElementById("scoreValue").innerHTML= score;
            hide("wrong");
            unhide("correct");
            setTimeout(function(){hide("correct")},1000);
            generateQuestionAnswers();
           
        }

        else {
            
            hide("correct");
            unhide("wrong");
            setTimeout(function(){hide("wrong");} ,1000);
           
        }

    }

}
}




//start countdown
function startCountdown(){
    action = setInterval(function(){ timeremaining -= 1;
        document.getElementById("timeRemainingValue").innerHTML= timeremaining;
        if(timeremaining == 0){
        stopCountdown();
        unhide("gameover");

        document.getElementById("gameover").innerHTML="<p>Game Over! </p><p>Your score is: " +score+ "</p>";

        hide("timeremaining");
        hide("correct");
        hide("wrong");
        playing=false;
        document.getElementById("startreset").innerHTML="Start Game";
        }
    }, 1000);
}



//for stopping the countdown because its frequently used
function stopCountdown(){
    clearInterval(action);
}

//for hiding the elements 
function hide(id){
    document.getElementById(id).style.display="none";
}
//for showing the elements
function unhide(id){
    document.getElementById(id).style.display="block";
}

//THE MOST AMAZING PART   > _ <
//generate the questions and answers
function generateQuestionAnswers(){
    var x= 1 + Math.round(Math.random()*9);
    var y= 1 + Math.round(Math.random()*9);
    var correctAnswer= x*y;

    document.getElementById("question").innerHTML= x +"x"+y;
    // document.getElementById("numberOne").innerHTML=x;
    // document.getElementById("numberTwo").innerHTML=y;
    var correctPosition= 1 + Math.round(Math.random()*3);
    document.getElementById("box"+correctPosition).innerHTML= correctAnswer; //for putting the correct answer in the boxes...its literally amazing


    //to fill boxes with wrong answers

    var answers=[correctAnswer];
    for(i=1; i<5; i++){
        if( i!== correctPosition){
            var wrongAnswer;
            do{
                wrongAnswer=(1+ Math.round(9* Math.random())) * (1+ Math.round(9* Math.random()));
            }
            while(answers.indexOf(wrongAnswer)> -1)

            // var wrongAnswers= 1 + Math.round((Math.random()*99));
            // var randomAnswer2= 1 + Math.round((Math.random()*99));
            // var randomAnswer3= 1 + Math.round((Math.random()*99));
            
            document.getElementById("box"+i).innerHTML=wrongAnswer;
            answers.push(wrongAnswer);
           
        }
    }
}                    
