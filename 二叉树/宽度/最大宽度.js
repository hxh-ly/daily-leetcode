const { HashTable } = require('../hash')
function deepGet(head) {
  if (head == null) return null;
  let Queue = []
  Queue.push(head)
  //hash 存 节点在的层数
  let Hash = new HashTable()
  Hash.push(head, 1);
  //大层
  let curLevel = 1;
  //该层的数
  let curLevelNode = 0;
  //存放最大值
  let max = Number.MIN_VALUE
  while (Queue.length != 0) {
    //出开始算  出算 curLevelNode算1
    let cur = Queue.shift()
    //小层
    let curSelfNode = Hash.get(cur)
    if (curLevel == curSelfNode) {
      //同层继续计数
      curLevelNode++
    } else {
      //结束 结算
      max = Math.max(max, curLevelNode)
      //结束 重置大层
      curLevel++;
      // 出的时候算1  
      curLevelNode = 1;
    }
    if (head.left) {
      Hash.push(head.left, curSelfNode + 1)
      Queue.push(head.left)
    }
    if (head.right) {
      Hash.push(head.right, curSelfNode + 1)
      Queue.push(head.right)
    }
  }
}
