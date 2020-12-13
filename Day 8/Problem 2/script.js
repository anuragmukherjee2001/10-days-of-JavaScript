function regexVar() {
  
        var re;
        re = new RegExp("^(Mr|Mrs|Ms|Dr|Er)\\.[a-zA-Z]+$");

    return re;
}

function main() {
    const re = regexVar();
    const s = "Dr#Joseph";
    
    console.log(!!s.match(re));
}