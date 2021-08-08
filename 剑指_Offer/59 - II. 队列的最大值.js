/* 
【题目】
实现队列
多一个要求：
max: O(1)
【思路】
queue
help  头放最大的  需要push的时候  小于该值的全都出去
*/
var MaxQueue = function () {
  this.queue = []
  this.help = []
};

/**
* @return {number}
*/
MaxQueue.prototype.max_value = function () {
  if (this.queue.length != 0) {
    return this.help[0]
  } else {
    return -1
  }
};

/** 
* @param {number} value
* @return {void}
*/
MaxQueue.prototype.push_back = function (value) {
  this.queue.push(value)
  while (this.help.length != 0 && this.help[this.help.length - 1] < value) {
    this.help.pop()
  }
  this.help.push(value)
  // console.log(this.help)
};

/**
* @return {number}
*/
MaxQueue.prototype.pop_front = function () {
  if (this.queue.length == 0) { return -1 }
  let val = this.queue.shift()
  if (this.help[0] == val) {
    this.help.shift()
  }
  return val
};

/**
* Your MaxQueue object will be instantiated and called as such:
* var obj = new MaxQueue()
* var param_1 = obj.max_value()
* obj.push_back(value)
* var param_3 = obj.pop_front()
*/