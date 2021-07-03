var s = "I, man, am regal; a German am I."
//var s="0P"
/*  var pattern = new RegExp(
   "[`_~!@#$^&*()\"-=|{}:;',\\[\\].<>/?~！@#￥……&*（）——|{}【】‘；：”“'。，、？%]")  */
var reg = /\\|\/|\?|\？|\*|\"|\“|\;|\.|\@|\#|\$|\%|\^|\&|\*|\(|\)|\-|\=|\+|\”|\'|\‘|\’|\<|\>|\{|\}|\[|\]|\【|,|\】|\：|\_|\:|\、|\^|\$|\!|\~|\`|\|/g; var rs = "";
for (var i = 0; i < s.length; i++) {
  // console.log(s.charAt(i)+"111");

  rs = rs + s.substr(i, 1).replace(reg, "");
  //console.log(rs);

}
console.log(rs)