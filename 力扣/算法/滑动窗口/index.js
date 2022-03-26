var containsNearbyDuplicate = function(nums, k) {
  // map
  let map = new Map();
  let left = 0;
  let right = 0;
  while(right < nums.length) {
      // 左闭右闭 不用减一 right - left即为窗口大小
      while(right < nums.length && right - left <= k) {
          if(map.has(nums[right]) && map[nums[right]] !== right) return true;
          map.set(nums[right], right);
          // 扩大窗口，跳出循环 循环外部需要缩小窗口
          right++;
      }
      
      map.delete(nums[left]);
      left++;
  }

  return false;
};

console.log(containsNearbyDuplicate([1,2,3,1], 3));