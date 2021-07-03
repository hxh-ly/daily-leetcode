var detectCycle = function (head) {
  if (head == null) { return null }
  let s = head, f = head;
  let isC = false
  while (f.next !== null && f.next.next !== null) {
      s = s.next;
      f = f.next.next;
      if (s === f) {
          isC = true
          break
      }
  }

  if (!isC) {
      return null
  }
  s = head;
  while (s !== f) {
      s = s.next;
      f = f.next;
  }
  return s;
};