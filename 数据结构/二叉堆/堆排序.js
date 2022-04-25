// 获取左孩子的位置 
function getLeftIndex (index) {
  return 2 * index + 1;
}

// 获取右孩子的位置
function getRightIndex (index) {
  return 2 * index + 2;
}

// 交换位置
function swap (heap, index, element) {
  let temp = heap[index];
  heap[index] = heap[element];
  heap[element] = temp;
}

// 堆化
function heapify(heap, index, size) {
  let element = index;
  let left = getLeftIndex(index);
  let right = getRightIndex(index);

  // 父节点与左孩子比较 若父节点小则替换
  // left <= size为错误，size为数组的元素 下标最长为size - 1
  if (left < size && heap[left] > heap[element]) {
    element = left;
  }

  // 新父节点与右孩子比较  若父节点比右孩子小  则替换
  if (right < size && heap[right] > heap[element]) {
    element = right;
  }

  // index === element 说明这个堆已经是最大堆了，不需要再调整
  if (index !== element) {
    swap(heap, index, element);
    heapify(heap, element, size);
  }
}

// 创建最大堆
function buildMaxHeap(array) {
  // 从最后的叶子节点的 父节点开始调整即可，节省遍历时间
  // Math.floor(array.lenth / 2) 为最右叶子节点的父节点
  for (let i = Math.floor(array.length / 2); i >= 0; i--) {
    heapify(array, i, array.length);
  }
}

function heapSort(array) {
  // 保存一个数组的快照快照
  let heapSize = array.length;

  buildMaxHeap(array);
  console.log('build', array);

  // 每次都将堆顶元素与堆中最后一个元素调整位置，调整完毕后继续堆化  
  // 将已调整的节点固定 不再处理，  即调整堆化的最终位置锁紧
  while (heapSize > 1) {
    // 将堆顶元素与堆尾元素对换位置 需要先 - 1,heapSize为数组长度，若需要取堆尾位置，则长度 - 1
    swap(array, 0, --heapSize);
    // 继续堆化 调整新堆， 已调整的不再算入堆内
    heapify(array, 0, heapSize);
  }
}


let array = [1,324,322,231,34,21,322];

heapSort(array);
console.log('heapSort', array);