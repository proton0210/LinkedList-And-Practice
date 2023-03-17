/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

function mergeTwoLists(
  list1: ListNode | null,
  list2: ListNode | null
): ListNode | null {
  let mergeHead: ListNode = new ListNode(-1, null);
  let prevNode: ListNode = mergeHead;
  while (list1 && list2) {
    if (list1.val <= list2.val) {
      prevNode.next = list1;
      list1 = list1.next;
    } else {
      prevNode.next = list2;
      list2 = list2.next;
    }
    prevNode = prevNode.next;
  }
  prevNode.next = list1 ? list1 : list2;
  return mergeHead.next;
}
