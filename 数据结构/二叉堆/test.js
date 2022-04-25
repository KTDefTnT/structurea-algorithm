const MinHeap = require('./minHeap.js');

let minHeap = new MinHeap();

minHeap.insert(10);
minHeap.insert(5);
minHeap.insert(8);
// minHeap.insert(6);

console.log('top', minHeap.top());
console.log('pop', minHeap.pop());

minHeap.getHeap();