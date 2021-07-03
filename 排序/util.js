//使用异或进行交换
function swap(arr, i, j) {
  if(i!=j) {
    arr[i] = arr[i] ^ arr[j]
    arr[j] = arr[i] ^ arr[j]  //arr[i]
    arr[i] = arr[i] ^ arr[j] //arr[mindex]
  }
 
  /* let tmp=arr[i]
  arr[i]=arr[j]
  arr[j]=tmp; */
  
}
module.exports = swap