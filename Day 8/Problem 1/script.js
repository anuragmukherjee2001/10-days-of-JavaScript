function regexVar() {

    var re;
    
    re = new RegExp("^([a,e,i,o,u]).*\\1$");

    return re;
}

function main() {
    const re = regexVar();
    const s = readLine();
    
    console.log(re.test(s));
}