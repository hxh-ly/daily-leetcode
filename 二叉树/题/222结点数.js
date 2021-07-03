var coutNode=function(root){
  //dfs
if(root ==null) return 0;
return coutNode(root.left)+coutNode(root.right)+1;

//bfs
let queue=[root]
let count=0;
while(queue.length!=0){
  let node=queue.shift()
  count++;
  if(node.left) queue.push(node.left)
  if(node.right) queue.push(node.right)

}
return count;

  //完全二叉树性质

}


//解法 3
var countNodes = function (root) {
  //1.总树高
  //2. 右子树高
  //3. 右===height-1  左满
  //4. 右===height-2  右满 
  let height = treeHeight(root)
  if (height == 0 || height == 1) {
      return height
  }
  if (treeHeight(root.right) == height - 1) {
      return (1 << (height - 1)) + countNodes(root.right)
  }
  else {
      return (1 << (height - 2)) + countNodes(root.left)
  }


};

var treeHeight = function (root) {
  if (root === null) return 0;
  return 1 + treeHeight(root.left)
}