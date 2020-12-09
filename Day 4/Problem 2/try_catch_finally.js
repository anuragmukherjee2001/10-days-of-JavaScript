function reverseString(s) {
    
    try{
        var split_str = s.split('')
        var reverse_str = split_str.reverse()
        var join_str = reverse_str.join('');
        s = join_str;
        

    }catch(error){
        console.log(error.message);
        // console.log(s);
    }finally{
        console.log(s);
    }
    
}

s = "1234";
reverseString(s);