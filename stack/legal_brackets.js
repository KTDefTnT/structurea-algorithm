/**
 * 下面的字符串中包含小括号，请编写一个函数判断字符串中的括号是否合法，所谓合法，就是括号成对出现\
 * 
 * 1、碰到左括号 压入栈中
 * 2、遇到字符不处理
 * 3、遇到有括号将栈顶元素弹出
 * 
 * 4、判断栈是否为空，为空则合法
 */
var { Stack } = require('./index');
function is_legal_brackets(string) {
  var stack = new Stack();
  for(let i = 0; i < string.length; i++) {
    if (string[i] === '(') {
      stack.push(string[i]);
    } else if (string[i] === ')') {
      // 判断当前栈是否为空 若为空则不合法
      if(stack.isEmpty()) return false;
      stack.pop();
    }
  }

  return stack.isEmpty();
}

var bracket1 = 'sdf(ds(ew(we)rw)rwqq)qwewe';
var bracket2 = '()()sd()(sd()fw))('
console.log('合法', is_legal_brackets(bracket2))
// (sd(qwqw)sd(sd))             合法
//            不合法