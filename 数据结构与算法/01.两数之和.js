// 输入：nums = [2,7,11,15], target = 9
// 输出：[0,1]
// 解释：因为 nums[0] + nums[1] == 9 ，返回 [0, 1] 。

var twoSum = function (nums, target) {
  const map = new Map();
  for (let i = 0; i < nums.length; i++) {
    let val = target - nums[i];
    if (map.has(val)) {
      return [map.get(val), i];
    }
    map.set(nums[i], i);
  }
};
console.log(twoSum([2, 7, 11, 15], 9));
