let { Stack } = require('./self_test_stack.js');
function MinStack () {
  this.dataStack = new Stack();
  this.minStack = new Stack();
  // push, pop, min
  this.push = function (item) {
    this.dataStack.push(item);
    if (this.minStack.isEmpty() || item <= this.minStack.top()) {
      this.minStack.push(item);
    } else {
      this.minStack.push(this.minStack.top());
    }
  }

  this.pop = function () {
    this.dataStack.pop();
    this.minStack.pop();
  }

  this.min = function () {
    return this.minStack.top();
  }
}

let minStack = new MinStack();
minStack.push(3);
minStack.push(6);
minStack.push(8); 
// console.log(minStack.min()); 
minStack.push(1); 
// console.log(minStack.min());
minStack.pop();
console.log(minStack.min());
