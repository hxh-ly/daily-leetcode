/**
 * @param {number} n
 * @return {string[][]}
 */
 var solveNQueens = function(n) {
  var s = new Array(n).fill(0).map(()=>new Array(n).fill('.'))
 
var col=new Array(100).fill(0)
var lt=new Array(100).fill(0)  //左斜下
var rt=new Array(100).fill(0) //右斜下
var count=0
var res=[]
var backTacking=function(n,u,s) {
  if(u==n) {
          count++

      res.push(s.map(item=>item.join('')))
      return
  }
  for(let i=0;i<n;i++) {
      if(!col[i]&&!lt[i+u]&&!rt[i-u+n]) {
          col[i] = lt[i+u] = rt[i-u+n] = 1;
          s[u][i] ='Q'
          backTacking(n,u+1,s)
          col[i] = lt[i+u] = rt[i-u+n] = 0;
          s[u][i] ='.'
      }
  }
}
backTacking(n,0,s)

return res;
};
/* 
关键 lt 差
     rt 和
    backtracking 
*/