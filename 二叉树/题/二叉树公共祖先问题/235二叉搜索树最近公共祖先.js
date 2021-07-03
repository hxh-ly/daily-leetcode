 // 二叉搜索树能很快找到结点

var lowestCommonAncestor = function (root, p, q) {
  let path_p=getPath(root,p)
  let path_q=getPath(root,q)
  let ans=null
  for(let i=0;i<path_p.length&&i<path_q.length;i++){
    if(path_p[i]==path_q[i])
    { ans=path_p }
    else break;
  }
return  ans  
}

var getPath=function(root,target){
    let path=[]
    let root=node
    while(node!=target){
      path.push(node)
      if(target.val<node.val){
        node=node.left
      }
      else{
        node=node.right
      }
    }
    path.push(node)
    return path;
}