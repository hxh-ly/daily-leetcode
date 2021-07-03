function isCBT(root) {
  if (root == null) return true;
  //双空 后面的也必空  不健全
  let leaf = false;
  let l = null;
  let right = null;
  let queue = [root]
  while (queue.length != 0) {
    root = queue.shift()
    l = root.left;
    r = root.right;
    if (
      (l == null && r != null) || (leaf && (l == !null || r == !null))
    ) {
      return false
    }
    if (l)
      queue.push(l)
    if (r)
      queue.push(r)
    if (l == null || r == null) {
      leaf = true
    }
  }
  return true;
}