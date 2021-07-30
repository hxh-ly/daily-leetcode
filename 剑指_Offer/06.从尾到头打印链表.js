/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {number[]}
 */
//从后开始填数组
//栈

var reversePrint = function (head) {
  //先数出count 数组从最后一个值开始赋值
  let count = 0, node = head;
  while (node) {
    count++;
    node = node.next;
  }
  arr = Array(count).fill(0)
  node = head;
  for (let i = count - 1; i >= 0; i--) {
    arr[i] = node.val
    node = node.next;
  }
  return arr
};