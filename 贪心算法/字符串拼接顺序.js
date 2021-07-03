//a.b<=b.a  +传递性 
/* function compare(a, b) {
  return a + b <= b + a
}
function lowestString(strs) {
  if (strs == null || strs.length == 0)
    return ''
  strs.sort(compare())
  let sortString = ''
  for (let i = 0; i < strs.length; i++) {
    sortString += strs[i]
  }
  return sortString
} */
let aa='sfs'
for(let g of get(aa)){
  console.log(g);
  
}