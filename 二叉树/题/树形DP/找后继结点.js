// 中序的后一个就是后继结点
function getSuccessorNode(root) {
  if (root == null) return null;
  // 结点右子树的最左是后继
  if (root.right) {
    return getLeft(root.right)
  }
  //包含 后继是最右和 后继往上走遇到 parent.left==root
  else {
    let parent = root.parent;
    while (parent && parent.left != root) {
      root = parent;
      parent = root.parent;
    }
    return parent;
  }
}

function getLeft(root) {

  while (root.left) {
    root = root.left
  }
  return root;
}

