/* 

pushed = [1,2,3,4,5], popped = [4,5,3,2,1]
ture
合法顺序
*/
/**
 * @param {number[]} pushed
 * @param {number[]} popped
 * @return {boolean}
 */
var validateStackSequences = function (pushed, popped) {
  //结组辅助栈
  let stack = []
  let i = 0;
  for (let j = 0; j < pushed.length; j++) {
    //如果不等 一直压栈
    stack.push(pushed[j])
    //相等了 把同样的出栈 
    //结束的时候栈必为空
    while (stack.length != 0 && stack[stack.length - 1] == popped[i]) {
      i++;
      stack.pop()
    }
  }
  return stack.length == 0 ? true : false;
};