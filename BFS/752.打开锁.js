
//注意 
//1 queue是数组  ，hasQueue是帮助记忆queue的set
//2 特判 deadends里可能存在 '0000'
function openLock(deadends, target) {
    
  if (target === '0000')
    return 0;
  let deadSet = new Set(deadends)
  if (deadSet.has(target)||deadSet.has('0000')) {
    return -1;
  }
  let count = 0;
  let queue = ['0000']
  let hasQueue = new Set(['0000'])
  while (queue.length) {
    //let head=queue.shift()
    count++;
    //[0000]=> 8个数
    //[1000]-> ?个数
    const size = queue.length
    for (let i = 0; i < size; i++) {
      let head = queue.shift()
      for (let cur of get(head)) {
        if (!deadSet.has(cur) && !hasQueue.has(cur)) {
          if (target == cur) {
            return count
          }
          hasQueue.add(cur)
          queue.push(cur)
        }
      }
    }

  }
  return -1;
}
function get(status) {
  let res = []
  let arr = Array.from(status)
  for (let i = 0; i < 4; i++) {
    const aaa = arr[i]
    arr[i] = go(aaa)
    res.push(arr.join(''))
    arr[i] = back(aaa)
    res.push(arr.join(''))
    arr[i] = aaa;
  }
  return res;
}
function go(x) {
  return x == '9' ? '0' : Number(x) + 1+''
}
function back(x) {
  return x == '0' ? '9' : Number(x) - 1+''
}