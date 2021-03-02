const Stack = require('./index.js');
/**
 * 1、碰到数字则压入栈内
 * 2、碰到符号 连续取出两个数字进行计算的到 res，第二个字符 操作第一个字符
 * 3、将res压入栈内
 * 直到整个计算完毕后 弹出栈内元素则为结果
 */
function calc_exp(exp) {
  let exp_sign = ['+', '-', '*', '/'];
  var stack = new Stack();
  let first_value;
  let last_value;
  let res;
  for(let i = 0; i < exp.length; i++) {
    if (exp_sign.includes(exp[i])) {
      // 取出两个栈内元素
      last_value = stack.pop();
      first_value = stack.pop();
      res = Math.floor(eval(`${first_value}${exp[i]}${last_value}`));
      stack.push(res);
    } else {
      stack.push(exp[i]);
    }
  }

  return stack.top();
}

// ["4", "13", "5", "/", "+"] 等价于(4 + (13 / 5)) = 6
// ["10", "6", "9", "3", "+", "-11", "*", "/", "*", "17", "+", "5", "+"] 
// 等价于((10 * (6 / ((9 + 3) * -11))) + 17) + 5
var arr1 = ["4", "13", "5", "/", "+"];
var arr2 = ["10", "6", "9", "3", "+", "-11", "*", "/", "*", "17", "+", "5", "+"];
console.log('结果1:', calc_exp(arr1));
console.log('结果2:', calc_exp(arr2));