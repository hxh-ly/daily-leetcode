/*
实现栈
外加 min的函数
*/
/**
 * initialize your data structure here.
 */

 /* 
 【思路】
 push: A 正常
       B [首个 | 比B栈顶小] 维护非严格降序
pop: A 正常
     B 如果 A.pop()==B.top()  B维护一致 pop
top :直接返回 A的栈顶
min: 返回B的栈顶            
 */
var MinStack = function () {
  this.arr = []
  //辅助数组
  this.B = []
};

/** 
* @param {number} x
* @return {void}
*/
MinStack.prototype.push = function (x) {
  //非严格降序
  if (this.B.length == 0 || x <= this.B[this.B.length - 1]) {
    this.B.push(x)
  }
  this.arr.push(x)
};

/**
* @return {void}
*/
MinStack.prototype.pop = function () {
  let a = this.arr.pop()
  if (a == this.B[this.B.length - 1]) {
    this.B.pop()
  }

};

/**
* @return {number}
*/
MinStack.prototype.top = function () {
  return this.arr[this.arr.length - 1]
};

/**
* @return {number}
*/
MinStack.prototype.min = function () {
  return this.B[this.B.length - 1]
};

/**
* Your MinStack object will be instantiated and called as such:
* var obj = new MinStack()
* obj.push(x)
* obj.pop()
* var param_3 = obj.top()
* var param_4 = obj.min()
*/