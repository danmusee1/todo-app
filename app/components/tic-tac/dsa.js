//Input: nums = [2, 7, 11, 15], target = 9
//Output: [0, 1] // because nums[0] + nums[1] = 2 + 7 = 9


function twoSum(nums, target) {
  const map = new Map();

  for (let i = 0; i < nums.length; i++) {
    const complement = target - nums[i];
    if (map.has(complement)) {
      return [map.get(complement), i];
    }
    map.set(nums[i], i);
  }

  return [];
}

console.log(twoSum([2, 7, 11, 15], 9)); // Output: [0, 1]
