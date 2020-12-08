function getGrade(score) {
    let grade;
    // Write your code here
    if(score > 25 && score <= 30){
        return score = "A";
    }
    else if(score > 20 && score <= 25){
        return score = "B";
    }
    else if(score > 15 && score <= 20){
        return score = "C";
    }
    else if(score > 10 && score <= 15){
        return score = "D";
    }
    else if(score > 5 && score <= 10){
        return score = "E";
    }
    else if(score >= 0 && score <= 5){
        return score = "F";
    }
   return score;
}


score = 10
console.log(getGrade(score));