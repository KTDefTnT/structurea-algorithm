/**
 * hashMap
 * @param {*} nums 
 * @returns 
 */
var findRepeatNumber = function(nums) {
  let hashMap = new Map();
  for (let i = 0; i < nums.length; i++) {
      if (hashMap.has(nums[i])) return nums[i];
      hashMap.set(nums[i], nums[i]);
  }

  return -1;
};