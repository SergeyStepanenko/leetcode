/*
 * @lc app=leetcode id=13 lang=javascript
 *
 * [13] Roman to Integer
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
/*
 * @lc app=leetcode id=13 lang=javascript
 *
 * [13] Roman to Integer
 */

// @lc code=start

const map = {
  I: 1,
  V: 5,
  X: 10,
  L: 50,
  C: 100,
  D: 500,
  M: 1000,
};

/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function (s) {
  let sum = 0;

  for (let i = s.length - 1; i >= 0; i--) {
    const currentN = map[s[i]];
    const prevN = map[s[i + 1]];

    if (!prevN) {
      sum += currentN;
      continue;
    }

    if (currentN < prevN) {
      sum -= currentN;
      continue;
    }

    sum += currentN;
  }

  return sum;
};

// "MCMXCIV"
// @lc code=end
