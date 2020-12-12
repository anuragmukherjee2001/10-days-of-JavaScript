function getDayName(dateString) {
    let dayName = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    var get_day = new Date(dateString).getDay();
    
    return dayName[get_day];
}

var date = 10/11/2009;
console.log(getDayName(date));