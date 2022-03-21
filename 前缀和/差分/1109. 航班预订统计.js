/* 
输入：bookings = [[1,2,10],[2,3,20],[2,5,25]], n = 5
航班编号        1   2   3   4   5
预订记录 1 ：   10  10
预订记录 2 ：       20  20
预订记录 3 ：       25  25  25  25
总座位数：      10  55  45  25  25
因此，answer = [10,55,45,25,25]
*/

/* 
差分的用途: 将多个区间的多次操作 从O（n2) 变成O（n)
再用前缀和可以还原区间的样子。
*/
var corpFlightBookings = function (bookings, n) {
  let arr=Array(n+1).fill(0) //多一位
  let length=bookings.length
  for(let i=0;i<length;i++) {
      let item=bookings[i]
      arr[item[0]-1] = arr[item[0]-1]+ item[2]
      arr[item[1]] = arr[item[1]]-item[2]
  }
    console.log(arr)
  for(let i=1;i<n;i++) {
     arr[i]=arr[i-1]+arr[i]
  }
   console.log(arr)
  return arr.slice(0,n)  //要截取
 };