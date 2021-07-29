//在s2是先入， 在s1是后入  s1.push(s2.pop())
var cQueue = function () {
  this.s1 = []  //队列的头部
  this.s2 = [] //队列的尾部  先入的先出

}
cQueue.prototype.appendTail = function (value) {
  this.s2.push(value)
}
cQueue.prototype.delHead = function () {
  if (this.s1.length == 0 && this.s2.length == 0) {
    return -1;
  }
  if (this.s1.length == 0) {
    while (this.s2.length) {
      this.s1.push(this.s2.pop())
    }
  }
  return this.s1.pop()
}