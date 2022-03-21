const Stack = require('../../structure/stack/Stack');
/**
 * 完成中序表达式转后续表达式(逆波兰式)
 * 输入:["12","+", "3"]
 * 输出:["12","3","+"]
 * 
 * 输入:['(', '1', '+', '(', '4', '+', '5', '+', '3', ')', '/', '4', '-', '3', ')', '+', '(', '6', '+', '8', ')', '*', '3']
 * 输出:['1', '4', '5', '+', '3', '+', '4', '/', '+', '3', '-', '6', '8', '+', '3', '*', '+']
 */

/**
 * 思路：
 * 1、根据加减乘除括号分优先级，括号优先级最高，乘除第二 加减第三
 * 2、遇到数字 直接压入postfixList
 * 3、遇到左括号入栈
 * 4、遇到右括号,把栈顶元素弹出并放入到dataStack中,直到遇到左括号，最后弹出左括号
 * 5、
 *    a: 符号栈中为空：碰到符号压入expStack中
 *    b: 符号栈不为空：
 *           1.若平级 则将栈顶元素弹出，当前表达式压入expStack中
 *           2.若是当前表达式优先级更高，则直接压入expStack中
 *           3.若当前表达式优先级更低，则将expStack.top弹出后，直到遇到优先级比自己更低的。将当前表达式压入expStack
 *   ! 总结： 判断优先级，直到找到优先级最后一个存在于栈中，且优先级比自己小的表达式， 最后将自己压入栈中
*/

const levelMap = {
  "+": 1,
  "-": 1,
  "*": 2,
  "/": 2
};
function infix_exp_2_postfix_exp(exp) { 
  let postfixList = [];
  // 计算表达式存储
  let expStack = new Stack();
  for (let i = 0; i < exp.length; i++) {
    let item = exp[i];
    if (!isNaN(item)) {
      postfixList.push(item);
    } else if (item === '(') {
      expStack.push(item);
    } else if (item === ')') {
      while(expStack.top() !== '(') {
        postfixList.push(expStack.pop());
      }
      // 额外将左括号弹出
      expStack.pop();
    } else {
      let topExp = expStack.top();
      while(topExp && levelMap[topExp] >= levelMap[item]) {
        postfixList.push(expStack.pop());
        topExp = expStack.top();
      }

      expStack.push(item);
    }
  }

  // for循环结束后, 栈里可能还有元素,都弹出放入到postfix_lst中
  while(!expStack.isEmpty()) {
    postfixList.push(expStack.pop())
  }

  return postfixList;
}

// (1+(4+5+3)/4-3)+(6+8)*3
var exp = ['(', '1', '+', '(', '4', '+', '5', '+', '3', ')', '/', '4', '-', '3', ')', '+', '(', '6', '+', '8', ')', '*', '3']
console.log(infix_exp_2_postfix_exp(exp))