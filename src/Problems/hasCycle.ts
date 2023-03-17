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

function hasCycle(head: ListNode | null): boolean {
  const check = new Set<ListNode | null>();
  let res: boolean = false;
  while (head && !res) {
    check.has(head) ? (res = true) : check.add(head);
    head = head.next;
  }
  return res;
}
