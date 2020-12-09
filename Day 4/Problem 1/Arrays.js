function getSecondLargest(nums) {
    // Complete the function
    var largest = 0, second_largest = 0;
    for(var i = 0; i < nums.length; i++){
        if(nums[i] > largest){
            second_largest = largest;
            largest = nums[i];
        }
        
        else if(nums[i] > second_largest && nums[i] != largest){
            second_largest = nums[i];
        }
    }
    return second_largest;
}

var nums = [10, 9, 9, 8, 8, 11, 8, 0, 9, 1];
res = getSecondLargest(nums);
console.log(res);