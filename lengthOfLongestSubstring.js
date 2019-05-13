/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
  let maxL = 0
  let res = []
  for (let i = 0; i < s.length; i++) {
    let c = s[i]
    let index = res.indexOf(c)
    if (index >= 0) {
      res.splice(0, index + 1)
      res.push(c)
    } else {
      res.push(c)
      maxL = Math.max(maxL, res.length)
    }
  }
  return maxL
}
