// import './self_test_stack.js';
let { Stack } = require('./self_test_stack.js');
function is_legal_brackets (string) {
  var stack = new Stack();
  let i = 0;
  while (i <= string.length) {
    let item = string[i];
    i += 1;
    if (item === '(') {
      stack.push(item);
    } else if (item === ')'){
      if (!stack.isEmpty()) {
        stack.pop();
      } else {
        return '非法';
      }
    }
  }
  return stack.isEmpty() ? '合法' : '非法';
}

console.log(is_legal_brackets('(3+6)(4*6)('));
console.log(is_legal_brackets('((3+6)(4*6)())'));