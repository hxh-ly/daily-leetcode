function Trie() {
  this.children = []
}

Trie.prototype.insert = function (word) {
  var node = this.children
  for (var i of word) {
    if (!node[i]) {
      node[i] = {}
    }
    node = node[i]
  }
  node.isEnd = true
}
/* 
node
*/
Trie.prototype.searchPrefix = function (word) {
  var node = this.children
  var father=node
  for (var i of word) {
    if (!node[i]) {
      return false
    }
    node = node[i]
  }
  console.log(father);
  return node
}
/* 
boolean
*/
Trie.prototype.search = function (word) {
  var node = this.searchPrefix(word)
  return node !== undefined && node.isEnd !== undefined
}
/* 
boolean
*/
Trie.prototype.StartWith = function (word) {
  return this.searchPrefix(word)
}

var trie = new Trie();
trie.insert("apple");
trie.search("apple");