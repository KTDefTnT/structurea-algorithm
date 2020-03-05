let { Stack } = require('./self_test_stack.js');

function calc_exp (exp) {
  let stack = new Stack();
  let expList = ['+', '-', '*', '/'];
  for (let i = 0; i < exp.length; i++) {
    let item = exp[i];
    if (!isNaN(item)) {
      stack.push(item);
    } else if (expList.includes(item)) {
      if (stack.size() < 2) {
        console.log(new Error('非法逆波兰式，请检查！'));
        return null;
      }
      let next_value = stack.pop();
      let prev_value = stack.pop();
      let new_value = eval(prev_value + item + next_value);
      stack.push(new_value);
    }
  }
  return stack.top();
}

console.log(calc_exp([4, 15, 5, '/', '+', 3, '-'])); // 4 + 15 / 5 = 7