// 输入：nums = [-1,0,1,2,-1,-4]
// 输出：[[-1,-1,2],[-1,0,1]]
// var threeSum = function (nums) {
//   const res = [];
//   nums.sort((a, b) => a - b);
//   console.log("nums", nums);
//   for (let i = 0; i < nums.length - 2; i++) {
//     if (i > 0 && nums[i] === nums[i - 1]) continue;
//     let first = i;
//     let second = i + 1;
//     let third = nums.length - 1;
//     while (second < third) {
//       let sum = nums[first] + nums[second] + nums[third];
//       if (!sum) {
//         res.push([nums[first], nums[second], nums[third]]);
//         while (second < third && nums[second] === nums[second + 1]) {
//           second++;
//         }
//         while (second < third && nums[third] === nums[third - 1]) {
//           third--;
//         }
//         second++;
//         third--;
//       } else if (sum < 0) {
//         second++;
//       } else if (sum > 0) {
//         third--;
//       }
//     }
//   }
//   return res;
// };
var threeSum = function (nums) {
  let res = [];
  let len = nums.length;
  nums.sort((a, b) => a - b);
  for (let i = 0; i < len - 2; i++) {
    if (i > 0 && nums[i] === nums[i - 1]) continue;
    let first = i;
    let second = i + 1;
    let third = len - 1;
    while (second < third) {
      let sum = nums[first] + nums[second] + nums[third];
      if (!sum) {
        res.push(nums[first], nums[second], nums[third]);
        while (second < third && nums[second] === nums[second + 1]) {
          second++;
        }
        while (second < third && nums[third] === nums[third - 1]) {
          third--;
        }
        second++;
        third--;
      } else if (sum < 0) {
        second++;
      } else if (sum > 0) {
        third--;
      }
    }
  }
  return res;
};
console.log(threeSum([-1, 0, 1, 2, -1, -4]));
