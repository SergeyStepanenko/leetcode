/*
 * @lc app=leetcode id=9 lang=javascript
 *
 * [9] Palindrome Number
 */

// @lc code=start
/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
  const s = x.toString();

  for (let i = 0; i < s.length; i++) {
    const p1 = i;
    const p2 = s.length - 1 - i;
    const v1 = s[p1];
    const v2 = s[p2];

    if (p1 === p2 || p1 > p2) {
      return true;
    }

    if (v1 !== v2) {
      return false;
    }
  }

  return true;
};
// @lc code=end
