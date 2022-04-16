/**
 * 循环数组，比较当前元素和下一个元素，如果当前元素比下一个元素大，向上冒泡。
 * 这样一次循环之后最后一个数就是本数组最大的数。
 * 
 * 时间复杂度： O(n²)
 * 空间复杂度： O(1)
 */

function bubbleSort(arr) {
  for (let j = 0; j < arr.length; j++) {
    let complete = true;
    // 优化： 如果一个循环后，没有数据需要替换 则表示当前数组已有序 可提前结束循环
    // 后续的j + 1个元素已排序好
    for (let i = 0; i < arr.length - 1 - j; i++) {
      if (arr[i] > arr[i + 1]) {
        [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
        complete = false;
      }
    }

    if (complete) break;
  }

  return arr;
}

let arr = [212,324,34,45,231,5654,325,786];
console.log(bubbleSort(arr));
