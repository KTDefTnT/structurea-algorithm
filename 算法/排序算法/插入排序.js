/**
 * 将左侧序列看成一个有序序列，每次将一个数字插入该有序序列。
 * 插入时，从有序序列最右侧开始比较，若当前值排序值比前面的数小，则将当前值与前面的值交换位置，
 * 同时更换下标 继续往前寻找 知道找到前面的数比自己小 则停止，跳出循环 当前值排序完成
 * 
 * 时间复杂度：O(n²)
 * 空间复杂度：O(1)
 */
function insertSort(arr) {
  for(let i = 1; i < arr.length; i++) {
    let target= i;
    for (let j = i - 1; j >= 0; j--) {
      // 前面值比当前的值大，交换位置
      if (arr[j] > arr[target]) {
        // 交换位置
        [arr[j], arr[target]] = [arr[target], arr[j]];
        // 每次替换，target需要替换
        target = j;
      }
    }
  }

  return arr;
}

let arr = [212,324,34,45,231,5654,325,786];
console.log(insertSort(arr));