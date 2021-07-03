//序列化
function serialByPre(head) {
  if (head == null) return '#_';
  let str = head.val + '_'
  str += serialByPre(head.left)
  str += serialByPre(head.right)
  return str;
}

function reconByPreString(preStr) {
  values = preStr.split('_')
  let queue = []
  for (let i = 0; i < values.length; i++) {
    queue.push(values[i])
  }
  //反序列化
  return reconPreOrder(queue);
}
function reconPreOrder(queue) {
  let a = queue.shift()
  if (a == '#') {
    return null;
  }
  let node = new TreeNode(parseInt(a))
  node.left = reconPreOrder(queue)
  node.right = reconPreOrder(queue)
  return node;
}