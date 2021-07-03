
/* function dfs(root, p, q) {
  if (root == null) return false;
  let lson = dfs(root.left, p, q)
  let rson = dfs(root.right, p, q)
  if ((lson && rson) || ((root.val == p.val || root.val == q.val) && (lson || rson))) {
    ans = root;
  }
  return rson || lson || (root.val == p.val || root.val == q.val)

} */

//左神
function lac(head, o1, o2) {
  //找到就可以往上返回了 找到不到底层的null 会一直向上合并()
  // 结论1：也就是子树不包含o1 / o2   往上走就成为null  
  // 结论2： 有o1/o2 就往上返回 o1/o2 返到祖先之下
  if (head == null || head == o1 || head == o2) {
    return head;
  }
  let left = lac(root.left, o1, o2)
  let right = lac(root.right, o1, o2)
  if (left != null && right != null) {
    return head;
  }
  //向上合并
  return left != null ? left : right
}


function getUser(
  basic_information = false,
  gym_goal = false,
  photos = false,
  iconsNumber = false
) {
  console.log(basic_information);

}
getUser()
/* var myMap = new Map();
myMap.set("0", "foo");
myMap.set(1, "bar");
//myMap.set({}, "baz");
//可迭代对象
console.log(myMap.entries());
//对象
console.log(Object.fromEntries(myMap.entries())); */

