/**
 * 
给你两个整数数组 arr1 ， arr2 和一个整数 d ，请你返回两个数组之间的 距离值 。

「距离值」 定义为符合此距离要求的元素数目：对于元素 arr1[i] ，
  不存在任何元素 arr2[j] 满足 |arr1[i]-arr2[j]| <= d 。
 */

  var findTheDistanceValue = function (arr1, arr2, d) {
    arr2.sort((a, b) => a - b);
    let result = 0;
    for (let i = 0; i < arr1.length; i++) {
        // 在第二个数组中找当前值的位置
        // 如果当前值与前一位 后一位的差值都大于 d，则arr2整个数据都满足条件
        let pivot = binarySearch(arr2, arr1[i]);

        // 如果当前值可以arr2中找到则不满足条件
        if (arr1[i] === arr2[pivot]) continue;
        let isOk = true;

        // 边界条件 pivot === arr.length, pivot = 0
        if (pivot < arr2.length) {
            isOk = arr2[pivot] - arr1[i] > d;
            if (!isOk) continue;
        }

        if (pivot - 1 >= 0 && pivot - 1 <= arr2.length) {
            isOk = arr1[i] - arr2[pivot - 1] > d;
        }

        result += isOk ? 1 : 0;
    }

    console.log('result', result);
    return result;
};

var binarySearch = function(nums, target) {
    let left = 0;
    let right = nums.length - 1;

    while(left <= right) {
        let middle = left + Math.floor((right - left) >> 1);
        if (nums[middle] === target) return middle;
        if (nums[middle] > target) {
            right = middle - 1;
        } else {
            left = middle + 1;
        }
    }

    return left;
}
// let arr1 = [4,5,8], arr2 = [10,9,1,8], d = 2;
// let arr1 = [1,4,2,3], arr2 = [-4,-3,6,10,20,30], d = 3;
let arr1 = [2,1,100,3], arr2 = [-5,-2,10,-3,7], d = 6;
// findTheDistanceValue([4,5,8], [10,9,1,8], 2);
findTheDistanceValue(arr1, arr2, d);
// findTheDistanceValue([2,1,100,3], [-5,-2,10,-3,7], 2);