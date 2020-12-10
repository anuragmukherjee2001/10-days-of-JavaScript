function getCount(objects) {
    
    var count = 0;
    for (var i in objects){
        if(objects[i].x == objects[i].y){
            count++;
        }
    }
    return count;

}

for (let i = 0; i < 3; i++) {
    const [a, b] = [1,1, 2,4, 4,4].split(",");
    
    objects.push({x: +(a), y: +(b)});
}

console.log(getCount(objects));
