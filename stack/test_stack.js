// 栈 先进后出 first in last out
function Stack () {
  var items = []; // 存储数据
  
  // 从栈顶添加元素， 也叫压栈 -- 无返回值，改变原数据
  this.push = function (item) {
    items.push(item);
  }
  // 从栈顶弹出元素 出栈-- 返回值 -栈顶元素，改变原数据
  this.pop = function (item) {
    return items.pop(item);
  }

  // 返回栈顶元素 弹出 -- 返回值 - 栈顶元素
  this.top = function () {
    return items[items.length - 1];
  }

  // 判断栈是否为空
  this.isEmpty = function () {
    return items.length === 0;
  }

  // 返回栈的大小
  this.size = function () {
    return items.length;
  }

  // 清空栈
  this.clear = function () {
    items = [];
  }
}
// var stack = new Stack();
// stack.push('x');
// console.log('stack', stack.size());
// 计算后缀表达式 [4, 15, 5, '/', '+']
function calc_exp (exp) {
  var stack = new Stack();
  for (let i = 0; i < exp.length; i++) {
    if (['+', '-', '*', '/'].includes(exp[i])) {
      let value_1 = stack.pop(); // 最后一个入栈
      let value_2 = stack.pop(); // 倒数第二个入栈
      let new_value = eval(value_2 + exp[i] + value_1);
      stack.push(new_value);
    } else {
      stack.push(exp[i]);
    }
  }
  if (stack.size() === 1) {
    return stack.pop();
  } else {
    return undefined;
  }
}
// console.log(calc_exp([4, 15, 5, '/', '+']));
//	定义运算符的优先级
var	priority_map	= {
  "+": 1,
  "-": 1,
  "*": 2,
  "/": 2
};
var expList = ['+', '-', '*', '/'];
// 中缀表达式 改为 后缀表达式 exp 为
function infix_exp_2_postfix_exp(exp) {
  var stack = new Stack();
  var	postfix_lst	= [];
  for (let i = 0; i < exp.length; i++) {
    var item = exp[i];
    if (!isNaN(item)) {
      postfix_lst.push(item);
    } else if (item === '(') {
      stack.push(item);
    } else if (item === ')') {
      while (stack.top() !== '(') {
        postfix_lst.push(stack.pop());
      }
      stack.pop(); // 弹出左括号
    // 碰到符号
    } else {
      // 当前符号优先级大于栈顶符号优先级
      if (!stack.isEmpty() &&  expList.includes(item) && priority_map[stack.top()] >= priority_map[item]) {
        postfix_lst.push(stack.pop());
      }
      stack.push(item);
    }
  }
  while (!stack.isEmpty()) {
    postfix_lst.push(stack.pop());
  }
  return postfix_lst;
}
var	exp	= ["(","1","+","(","4","+","5","+","3",")","-","3",")","+","(","9","+","8"
,")"];
var exp2 = [14, '*', 5, '+', '(', 5, '+', 10, '/', 5, ')', '*', 2];
var exp3 = [12, '+', 1, '-', 10, '+', 7, '+', 8, '-', 5];
console.log(infix_exp_2_postfix_exp(exp));
// 判断括号是否合法
function is_legal_brackets (string) {
  var stack = new Stack();
  for (let i = 0; i < string.length; i++) {
    var item = string[i];
    if (item === '(') {
      stack.push('(');
    } else if (item === ')') {
      if (stack.isEmpty()) {
        return '非法';
      } else {
        stack.pop();
      }
    }
  }
  return stack.isEmpty() ? '合法' : '非法';
}
// console.log(is_legal_brackets('xss(45654)(435(676))'));