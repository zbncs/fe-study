// https://leetcode.cn/problems/find-minimum-in-rotated-sorted-array/

/**
 * @param {number[]} nums
 * @return {number}
 */
const findMin = function(nums) {
    let left = 0
    let right = nums.length - 1
    // [3,4,5,    1,2]

    // 不能等于，因为里面的条件没有处理相等的情况
    while (left < right) {
        const mid = Math.floor((left + right) / 2)
        if (nums[mid] < nums[right]) {
            right = mid
        } else if (nums[mid] > nums[right]) {
            left = mid + 1
        }

    }

    return nums[left]
};


console.log(findMin([3,4,5,1,2]))
console.log(findMin([11,13,15,17]))
