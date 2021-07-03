var partition = function (s) {
  let res = []
  let path = []
  var backTracking = function (s, index) {
      if (index >= s.length) {
          res.push([...path])
          return
      }
      for (let i = index; i < s.length; i++) {
          if (isPalindrome(s, index, i)) {
              let str = s.substr(index, i - index + 1)
              path.push(str)
          } else {
              continue
          }
          backTracking(s, i + 1)

          path.pop()
      }

  }

  var isPalindrome = function (str, start, end) {
      for (let i = start, j = end; i < j; i++, j--) {
          if (str[i] != str[j]) {
              return false
          }
      }
      return true;
  }
  backTracking(s, 0)
  return res
};