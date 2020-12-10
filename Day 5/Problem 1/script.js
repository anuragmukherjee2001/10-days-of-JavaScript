function Rectangle(a, b) {
    
    var rec = {
        length:a,
        width:b,
        perimeter:2 * (a + b),
        area:a * b,
    }
    return rec;
}

const rec = new Rectangle(6, 4);
    
console.log(rec.length);
console.log(rec.width);
console.log(rec.perimeter);
console.log(rec.area);