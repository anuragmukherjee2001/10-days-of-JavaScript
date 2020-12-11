function modifyArray(nums) {
    return nums.map(ele => {
        if(ele % 2 == 0){
            return ele * 2;
        }
        else{
            return ele * 3;
        }
    })
}

nums = [1 , 2 , 3 , 4 , 5];
console.log(modifyArray(nums))