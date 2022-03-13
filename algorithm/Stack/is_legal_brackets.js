const Stack = require('../../structure/stack/Stack');
/**
 * 判断是否为合法括号
 */
function isLegalBrackets(string) {
  let stack = new Stack();
  for (let i = 0; i < string.length; i++) {
    let item = string[i];
    //* a. 若碰到左括号则压入栈中，
    //* b.如果碰到右括号： 
    //! 1、判断栈中是否存在左括号，若不存在则 返回false
    //! 2、若存在，则从栈中弹出一个左括号
    if (item === '(') {
      stack.push(item);
    } else if (item === ')') {
      if (stack.isEmpty()) {
        return false;
      }
      stack.pop();
    }
  }
  return stack.isEmpty();
}

let string1 = 'sdf(ds(ew(we)rw)rwqq)qwewe';
let string2 = '(sd(qwqw)sd(sd))';
let string = '()()sd()(sd()fw))('

console.log(isLegalBrackets(string1));
console.log(isLegalBrackets(string2));
console.log(isLegalBrackets(string));