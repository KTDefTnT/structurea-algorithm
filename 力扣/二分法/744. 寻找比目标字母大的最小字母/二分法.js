// 744. 寻找比目标字母大的最小字母
var nextGreatestLetter = function(letters, target) {
  let left = 0;
  let right = letters.length - 1;
  while (left <= right) {
      let middle = left + Math.floor((right - left) >> 1);
      if (letters[middle] === target) return letters[middle + 1];
      if (letters[middle] > target) {
          right = middle - 1;
      } else {
          left = middle + 1;
      }
  }
  console.log('left', left);
  return letters[left];
};

let arr = ["c", "f", "j"];

nextGreatestLetter(arr, 'c');