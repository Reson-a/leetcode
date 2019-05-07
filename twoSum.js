/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 * 时间复杂度：O(n^2) 对于每个元素，我们试图通过遍历数组的其余部分来寻找它所对应的目标元素，这将耗费 O(n) 的时间。因此时间复杂度为 O(n^2) 
 * 空间复杂度：O(1)
 */

var twoSum = function(nums, target) {
  for (let i = 0; i < nums.length - 1; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] == target) return [i, j]
    }
  }
}

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 * 时间复杂度：O(n)， 我们只遍历了包含有 n 个元素的列表一次。在表中进行的每次查找只花费 O(1) 的时间。
 * 空间复杂度：O(n)， 所需的额外空间取决于哈希表中存储的元素数量，该表最多需要存储 n 个元素。
 */
var twoSum = function(nums, target) {
  let map = {}
  for (let i = 0; i < nums.length; i++) {
    let val = nums[i]
    let key = target - val
    if (key in map) return [map[key], i]
    map[val] = i
  }
}
