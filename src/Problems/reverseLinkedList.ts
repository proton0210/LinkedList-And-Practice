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

function reverseList(head: ListNode | null): ListNode | null {
  if (!head) return head;
  let currentNode = head;
  let prevNode: ListNode = null;
  while (currentNode !== null) {
    let tempNode = currentNode.next;
    currentNode.next = prevNode;
    prevNode = currentNode;
    currentNode = tempNode;
  }
  head = prevNode;
  return head;
}
