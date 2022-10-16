/**
 * 给你一个包含 n 个整数的数组 nums，判断 nums 中是否存在三个元素 a，b，c ，使得 a + b + c = 0 ？请你找出所有和为 0 且不重复的三元组。

注意：答案中不可以包含重复的三元组。

示例 1：

输入：nums = [-1,0,1,2,-1,-4]
输出：[[-1,-1,2],[-1,0,1]]

来源：力扣（LeetCode）
链接：https://leetcode.cn/problems/3sum
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。* 
 * 
解题思路
 *1.给数组排序  [-4，-1，-1，0，1，2]
2.遍历数组 从0到length-2
3.如果当前这个数等于前一个数 则跳过这个数 为什么？ 主要是为了去重 不包括重复的三元组
4.如果数字不同 则设置start=i+1 end=length-1 查看i start end 三数之和跟0比较 小于0 start++ 大于0 end--
如果等于0则把这三个数添加到结果里
5.返回结果
 *
 */
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
  const result = []
  nums.sort(function (a, b) {
    return a - b
  })
  for (let i = 0; i < nums.length - 2; i++) {
    if (i === 0 || nums[i] !== nums[i - 1]) {
      let start = i + 1,
        end = nums.length - 1
      while (start < end) {
        // 三种情况 
        if (nums[i] + nums[start] + nums[end] === 0) {
          result.push([nums[i], nums[start], nums[end]])
          start++
          end--
          while (start < end && nums[start] === nums[start - 1]) {
            start++
          }
          while (start < end && nums[end] === nums[end + 1]) {
            end--
          }
        } else if (nums[i] + nums[start] + nums[end] < 0) {
          start++
        } else {
          end--
        }
      }
    }
  }
  return result
};
const nums = [-1,0,1,2,-1,-4]
console.log(threeSum (nums))