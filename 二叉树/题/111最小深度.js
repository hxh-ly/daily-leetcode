var minDepth = function (root) {
  if (root === null) return 0;
  //null 节点不参与比较
  if(root.left==null && root.right!=null){
      return   1+ minDepth(root.right)
  }
  //null 节点不参与比较
  if(root.right==null && root.left!=null){
      return   1+ minDepth(root.left)
  }
  return 1 + Math.min(minDepth(root.left), minDepth(root.right))
};



var minDepth = function (root) {
  if (root === null) return 0;
  let queue = [root]
  let levelIndex = 0
  while (queue.length != 0) {
    // 这一层 个数
    let levelSize = queue.length;
    //这一层
    levelIndex++;
    // 走完这一层  父出子进  子也将成为父
    for (let i = 1; i <= levelSize; i++) {
      const node = queue.shift()
      if (node.left)  {
        queue.push(node.left) 
      }else{
        return levelIndex;
      }
      if (node.right) {queue.push(node.right)}
      else{
        return levelIndex;
      }
    }
  }
}