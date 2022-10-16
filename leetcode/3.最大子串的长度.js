/**无重复最长子串的长度
 * 给定一个字符串 s ，请你找出其中不含有重复字符的 最长子串 的长度。
 * 输入: s = "abcabcbb"
输出: 3 
解释: 因为无重复字符的最长子串是 "abc"，所以其长度为 3。


思路：滑动窗口法
1.创建一个set
2.创建两个指针  第一个指向字符串的开头 j  第二个随着for循环遍历字符串、
3.如果set中没有这个字符 则添加到set中并且更新maxlength的长度 
4.如果set中已经存在这个元素，则删除s【j】j++直到set中没有 在把这个元素添加进set
5.重复3和4 直到遍历完整个字符串 
 * @param {string} s
 * @return {number}
 */

function SubString(s) {

  const set = new Set()
  let i = 0
  let j = 0
  let maxLength = 0
  if (s.length === 0) return 0

  for (i; i < s.length; i++) {
    // 1.判断一下set集合里面有没有这个字符
    if (!set.has(s[i])) {
      //如果没有这个字符 那么添加进集合 并更新maxlength
      set.add(s[i])
      maxLength = Math.max(maxLength, set.size)
    } else {
      // 如果set中有这个元素 删除此元素 j++ 
      while (set.has(s[i])) {
        set.delete(s[j])
        j++
      }
      // 直到set没有这个值 添加进集合
      set.add(s[i])

    }
  }
  return maxLength
}

// for (i; i < s.length; i++) {
//   if (!set.has(s[i])) {
//     set.add(s[i]);
//     maxLength = Math.max(maxLength, set.size);
//   } else {
//     while (set.has(s[i])) {
//       set.delete(s[j]);
//       j++;
//     }
//     set.add(s[i]);
//   }
// }

// return maxLength;

const res = SubString("pwwkew")
console.log(res)