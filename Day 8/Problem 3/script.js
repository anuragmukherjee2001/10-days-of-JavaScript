function regexVar() {

    var re;
    re = new RegExp('\\d+','\g'); 
    
    return re;
}

function main() {
    const re = regexVar();
    const s = readLine();
    
    const r = s.match(re);
    
    for (const e of r) {
        console.log(e);
    }
}