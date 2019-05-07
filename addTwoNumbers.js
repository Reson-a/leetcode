/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
  let carry = 0
  let res = null
  let node = null
  while (l1 || l2 || carry) {
    let val = (l1 ? l1.val : 0) + (l2 ? l2.val : 0) + carry
    carry = parseInt(val / 10)
    val = val % 10
    if (!res) res = node = new ListNode(val)
    else node = node.next = new ListNode(val)
    l1 = l1 && l1.next
    l2 = l2 && l2.next
  }
  return res
}
