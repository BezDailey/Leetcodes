function canJump(nums) {
    return recursiveSolution(nums, 0);
}

function recursiveSolution(nums, index) {
    if (index === nums.length - 1) return true;

    if (nums[index] === 0) return false;

    let reach = index + nums[index];

    for (let jump = index + 1; jump < reach; jump++) {
        if (jump < nums.length - 1 && recursiveSolution(nums, jump)) return true;
    }

    return false;
}
