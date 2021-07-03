/**
 * @param {string} s
 * @return {string[]}
 */
var restoreIpAddresses = function (s) {
  var res = []
  var path = []
  let length = s.length
  if (length > 12 || length < 4) {
      return res;
  }

  var backTracking = function (s, index, segId) {
      if (segId == 4) {
          if (index == s.length) {
              let ipArr = ''
              for (let l = 0; l < 4; l++) {
                  ipArr += path[l]
                  if (l != 3) {
                      ipArr += '.'
                  }
              }
              res.push(ipArr)
          }
          return
      }
      if (s.charAt(index) == '0') {
          path[segId] = 0;
          backTracking(s, index + 1, segId + 1)
      }
      let ans = 0;
      for (let i = index; i < s.length; i++) {
          let str = s.charAt(i)
          ans = ans * 10 + Number(str)
          if (ans > 0 && ans <= 255) {
              path[segId] = ans
              backTracking(s, i + 1, segId + 1)
          } else {
              break;
          }
      }
  }
  backTracking(s, 0, 0)
  return res
};