const Stack = require('../../structure/stack/Stack');
/**
 * 计算逆波兰表达式 
 * 也叫后缀表达式，它将复杂表达式转换为可以依靠简单的操作得到计算结果的表达式，例如 (a+b)*(c+d)转换为ab+cd+*
 */
/**
 * 思路：
 * 1、循环整个exp，碰到数字则压入栈中
 * 2、如果碰到操作符，则从栈中弹出两个元素。将其与操作符拼接为字符串执行，将执行结果压入栈中(eval操作符)
 * 3、到全部结束后 返回栈中的元素
 * 
 * 可做一些边界处理
 * ! 1、exp中不是纯数字的参数 则提示错误
 * ! 2、错误逆波兰式，即前面有非法数据，或者数字个数或者符号个数出现错误
 */
function calc_expression(exp) {
  let stack = new Stack();
  for (let i = 0; i < exp.length; i++) {
    let item = exp[i];
    if(['+', '-', '*', '/'].includes(item)) {
      if (stack.size() < 2) {
        throw(new TypeError('错误的逆波兰式，请检查'));
      }
      let next_value = stack.pop();
      let prev_value = stack.pop();
      let new_value = Math.floor(eval(`${prev_value }${item}${next_value}`));
      stack.push(new_value);
    } else {
      // * 判断当前的值是否合法
      if (isNaN(item)) {
        throw(new TypeError('类型错误，请判断是否输入的为纯数字与操作符'));
      }
      stack.push(item);
    }
  }

  if(stack.size() !== 1) {
    throw(new TypeError('错误的逆波兰式，请检查'));
  }

  return stack.pop();
}
// 10*(6/((7+3)*-1))+17+5
let exp1 = ["10", "6", "7", "3", "+", "-1", "*", "/", "*", "17", "+", "5", "+"];
// 4+(13/5)
let exp2 = ["4", "13", "5", "/", "+"];

console.log(calc_expression(exp1));
console.log(calc_expression(exp2));