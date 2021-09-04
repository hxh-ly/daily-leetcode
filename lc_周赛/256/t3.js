var minSessions = function (tasks, sessionTime) {
  let sum = 0, left = 0, right = tasks.length - 1, count = 0;
  tasks.sort((a, b) => a - b)
  console.log(tasks);
  while (left <= right) {
    if (sum + tasks[right] < sessionTime) {
      sum += tasks[right]
      right--;
    } else if (sum + tasks[right] == sessionTime) {
      right--;
      count++;
      sum = 0
    } else {
      count++;
      sum = 0
    }
    if (sum + tasks[left] < sessionTime) {
      sum += tasks[left]
      left++;
    } else if (sum + tasks[left] == sessionTime) {
      count++;
      left++;
      sum = 0
    } else {
      count++;
      sum = 0
    }

  }
  console.log(count);
  return count;
};
var tasks = [5, 7, 5], sessionTime = 7
minSessions(tasks, sessionTime)