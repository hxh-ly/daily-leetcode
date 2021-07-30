var buildTree = function (preorder, inorder) {
  let n = preorder.length;
  //构建map方便查找   pre的根在in中的索引
  let myMap = new Map()
  for (let i = 0; i < n; i++) {
    myMap.set(preorder[i], i)
  }
  var myBuildTree = function (preorder, inorder, preLeft, preRight, inLeft, inRight) {

    //前的根idx
    preRoot = preLeft
    //中的根idx
    inRoot = myMap.get(preorder[preRoot])
    //中根前面的左结点个数
    left_count = inRoot - inLeft;
    let root = new TreeNode(preorder[preLeft])
    root.left = myBuildTree(preorder, inorder, preLeft + 1, preLeft + left_count, inLeft, inRoot - 1)
    root.right = myBuildTree(preorder, inorder, preLeft + left_count + 1, preRight, inRoot + 1, inRight)
    return root
  }
  return myBuildTree(preorder, inorder, 0, n - 1, 0, n - 1)
}