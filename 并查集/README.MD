# 并查集

## 解决什么

0. 初始化

```js
function init(n) {
  fa[Max]; 
  //rank 表示每个结点的深度  

  //fa 存储每个结点的父节点
  for (let i = 0; i <= n; i++) {
    fa[i] = i;
    //并的plus秩
    rank[i] = 1;
  }
}
```

1.  查 查询 2 个元素是否在同一个集合了

```js
function find(x) {
  if (fa[x] == x) {
    return x;
  }
  //找到 x的父节点
  return find(fa[x]);
}
```

2. 并 合并 2 个不相交的集合

```js
function merge(i, j) {
  //i并到j  j并到i都行
  fa[find(i)] = find(j);
}
```

3. 1 的 plus【路径压缩】

```js
function find(x) {
  if (fa[x] == x) {
    return x;
  }
  //每个结点的根节点都要更正
  fa[x] = find(fa[x]);
  return fa[x];
}
```

4. 2 的 plus【秩】

```js
//增加 rank【】 表示结点的子树深度
function merge(i, j) {
  //规则： 简单往复杂和   深度不用增加
  if(rank[i]<=rank[j]) {
fa[find(i)] = find(j);
  }
  else {
    fa[find[j]] =find(i)
  }
  if(rank[i]==rank[j]&&i!=j) {
    rank[j]++;
  }
}
```

<!-- 刚才做的那题是，数字范围，连续就在同一个集合，不连续就自成一个集合 -->
