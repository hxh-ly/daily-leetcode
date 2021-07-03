//node= 1<<height-1
function ifF(root) {

  let g = process(root)
  return g.node == (1 << g.height - 1)

}

function process(root) {
  if (root == null) return new info(0, 0)
  let l = process(root.left)
  let r = process(root.rihgt)

  let height = Math.max(l.height, r.height) + 1;
  let node = (l.node + r.node) + 1;

  return new info(height, node)
}

function info(height, node) {
  this.height = height
  this.node = node
}