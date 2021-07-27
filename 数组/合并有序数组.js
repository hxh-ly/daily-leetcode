// len1 len2 len
//O(m+n)

let nums1 = [1, 2, 3, 0, 0, 0], m = 3
let nums2 = [2, 5, 6], n = 3
const merge = function (nums1, m, nums2, n) {
  let len = m + n - 1, len1 = m - 1, len2 = n - 1;
  while (len2 >= 0) {

    if (len1 < 0) {
      nums1[len--] = nums2[len2--]
      continue;
    }
    nums1[len--] = nums2[len2] >= nums1[len1] ? nums2[len2--] : nums1[len1--]
  }

  return nums1
}
console.log(merge(nums1, 3, nums2, 3));
