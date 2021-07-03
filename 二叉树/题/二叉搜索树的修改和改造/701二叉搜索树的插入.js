var insertIntoBST = function (root, val) {
  if (root == null) return new TreeNode(val)
//递归
if(root.val<val){
  root.right=insertIntoBST(root.right,val)
}
else{
  root.left=insertIntoBST(root.left,val)
}
return root;
//非递归
let node=root;
while(node){
  if(node.val<val){
    if(node.right==null){
      node.right=new Tree(val)
      break;
    }else{
      node=node.right
    }

  }else{
    if(node.left==null){
      node.left=new Tree(val)
      break;
    }else{
      node=node.left
    }
  }
}
return root;
}