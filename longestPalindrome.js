/**
 * @param {string} 
 * @return {string}
 */
var longestPalindrome = function(s) {
  if (!s.length) return ''
  let left = 0
  let right = 0
  for (let i = 0; i < s.length; i++) {
    let res = midExpand(s, i, i)
    let resEven = midExpand(s, i, i + 1)
    if (resEven.length > res.length) res = resEven
    if (res.length > right - left + 1) {
      left = res.left
      right = res.right
    }
  }

  function midExpand(s, left, right = left + 1) {
    while (left >= 0 && right < s.length && s[left] == s[right]) {
      left--
      right++
    }
    return { left: left + 1, right: right - 1, length: right - left - 1 }
  }
  return s.slice(left, right + 1)
}