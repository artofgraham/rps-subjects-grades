//Rock, paper, scissors
const rps = document.getElementById("rps");
let results = document.getElementById("results");
rps.addEventListener("click", play);
function play(){
  let count = 0;
  while(count < 3){
  	let user = prompt("Round " + (count + 1) + ": Enter 'Rock, paper or scissors'!");
  	user = user.toLowerCase();
  	let computer = Math.random() * 10 + 1;
  	computer = Math.round(computer);
  	//console.log(computer);
  	if(computer < 3){
  		computer = "rock";
  	} else if(computer <= 6){
  		computer = "paper";
  	} else{
  		computer = "scissors";
  	}
  	if(user == "rock"){
  		if(computer == "paper"){
  			results.innerHTML += "Round " + (count + 1) + ": <strong>Paper wins!</strong><br><br>You chose: " + user + ".<br>The computer randomly chose: " + computer + ".<br><br>";
  		} else if(computer == "rock"){
  			results.innerHTML += "Round " + (count + 1) + ": It's a tie!<br><br>";
  		}
  	} else if(user == "paper"){
      if(computer == "scissors"){
  			results.innerHTML += "Round " + (count + 1) + ": <strong>Scissors wins!</strong><br><br>You chose: " + user + ".<br>The computer randomly chose: " + computer + ".<br><br>";
  		} else if(computer == "paper"){
  			results.innerHTML += "Round " + (count + 1) + ": It's a tie!<br><br>";
  		}
  	} else if(user == "scissors"){
  		if(computer == "rock"){
  			results.innerHTML += "Round " + (count + 1) + ": <strong>Rock wins!</strong><br><br>You chose: " + user + ".<br>The computer randomly chose: " + computer + ".<br><br>";
  		} else if(computer == "scissors"){
  			results.innerHTML += "Round " + (count + 1) + ": It's a tie!<br><br>";
  		}
  	} else{
  		results.innerHTML += "Invalid input! Please try again.<br><br>";
  	}
    count++;
    if(user == "rock" && computer == "scissors" || user == "paper" && computer == "rock" || user == "scissors" && computer == "paper"){
      results.innerHTML += "You won!<br><br>";
      break;
    }
  }
}
//Subjects and grades application
const grades = document.getElementById("grades");
grades.addEventListener("click", gradeSubject);
function gradeSubject(){
  let subjectNum = parseInt(prompt("How many subjects did you take?"));
  let total = 0, avg = 0, results = [subjectNum], output = document.getElementById("output");
  //clears the results from a previous output
  output.innerHTML = "";
  for(i = 0; i < subjectNum; i++){
    results[i] = parseInt(prompt("Enter your result for subject " + (i + 1) + "."));
  }
  for(i = 0; i < subjectNum; i++){
    output.innerHTML += "Result " + (i + 1) + " is: " + results[i] + "<br>";
    console.log("Result " + (i + 1) + " is: " + results[i]);
    total = total + results[i];
    if(results[i] >= 85){
      output.innerHTML += "Your grade is A for that subject." + "<br><br>";
    } else if(results[i] >= 70){
      output.innerHTML += "Your grade is B for that subject." + "<br><br>";
    } else if(results[i] >= 55){
      output.innerHTML += "Your grade is C for that subject." + "<br><br>";
    } else if(results[i] >= 40){
    output.innerHTML += "Your grade is D for that subject." + "<br><br>";
    } else if(results[i] >= 25){
      output.innerHTML += "Your grade is E for that subject." + "<br><br>";
    } else if(results[i] >= 10){
      output.innerHTML += "Your grade is F for that subject" + "<br><br>";
    } else{
      output.innerHTML += "Your grade is NG for that subject." + "<br><br>";
    }
  }
  avg = total / subjectNum;
  avg = Math.round(avg);
  output.innerHTML += "Your average result is: " + avg;
}
