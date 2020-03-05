let { Stack } = require('./self_test_stack.js');
// 中缀表达式修改为后缀表达式
function infix_exp_2_postfix_exp (infixExp) {
  var	priority_map	= {
    "+": 1,
    "-": 1,
    "*": 2,
    "/": 2
  };
  var expList = ['+', '-', '*', '/'];
  var priority_list = []; // 后缀表达式
  var stack = new Stack(); // 符号栈
  for (let i = 0; i < infixExp.length; i++) {
    let item = infixExp[i];
    if (!isNaN(item)) {
      priority_list.push(item);
    } else if (item === '(') {
      stack.push(item);
    } else if (item === ')') {
      // 弹出符号，直到遇到 左括号结束，将符号栈中的左括号弹出
      while (stack.top() !== '(') {
        priority_list.push(stack.pop());
      }
      stack.pop();
    // 如果栈中存在符号，当前符号优先级大于或者等于栈顶元素时，当前符号直接入 后缀表达式栈
    // 如果当前符号优先级小于栈顶元素。说明栈顶元素需要优先计算 弹出栈顶元素 再入栈
    } else {
      if (!stack.isEmpty() && expList.includes(item) && priority_map[stack.top()] >= priority_map[item]) {
        priority_list.push(stack.pop());
      }
      stack.push(item);
    }
  }

  while (!stack.isEmpty()) {
    priority_list.push(stack.pop());
  }

  return priority_list;
}

var	exp	= ["(","1","+","(","4","+","5","+","3",")","-","3",")","+","(","9","+","8"
,")"];
var exp2 = [14, '*', 5, '+', '(', 5, '+', 10, '/', 5, ')', '*', 2];
var exp3 = [12, '+', 1, '-', 10, '+', 7, '+', 8, '-', 5];
console.log(infix_exp_2_postfix_exp(exp));