function getMaxLessThanK(n, k){
    var max = 0;
    for (var i = 1; i < n; i++){
        for(var j = i + 1; j <= n; j++){
            var res = i & j;
            
            if(res < k && res > max){
                max = res;
            }
        }
    }
    return max;
}

function main() {
    const q = +(readLine());
    
    for (let i = 0; i < q; i++) {
        const [n, k] = readLine().split(' ').map(Number);
        
        console.log(getMaxLessThanK(n, k));
    }
}