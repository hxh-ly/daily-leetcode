/* 
给定一个长度n的整数数组height，有n条垂线，第i条线的两个端点[i,0]和[i.height[i]]
找出其中的两条线，使得它们与x 共同构成的容器可以容纳最多的水
返回容器可以储存的最大水量
说明：你不能倾斜容器


输入：[1,8,6,2,5,4,8,3,7]
输出 49

理解表述：
左右指针，找到较短的边，这就是两条线围成的最大面积。
可以分类讨论， 如果找中间的线，比两条线的短边还长，但宽度却变小了。如果找中间的线，比两条线的短边短，更没机会了。
*/
/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (height) {
    let left = 0, right = height.length - 1;
    let ans = 0;
    while (left < right) {
        let area = (right - left) * Math.min(height[left], height[right])
        if (height[left] < height[right]) {
            left += 1;
        } else {
            right -= 1;
        }
        ans = Math.max(area, ans)
    }
    return ans;
};
