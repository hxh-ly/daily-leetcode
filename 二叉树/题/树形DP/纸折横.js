//递归前序
//折纸  凹 凸

function printProcess(i,N,down){
  if(i>N) return
  printProcess(i+1,N,true)
  console.log(down?'凹':'凸');
  printProcess(i+1,N,false)

}