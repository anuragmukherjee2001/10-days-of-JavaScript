
function factorial(number){
    let fact = 1;
    
    if(number == 0 || number == 1){
        return 1;
    }
    else{
        for(let i = 2; i <= number; i++){
            fact = fact * i;
        }
    }
    return fact;
}

let number = 6;
console.log(factorial(number));

