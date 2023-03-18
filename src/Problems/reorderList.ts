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

/**
 Do not return anything, modify head in-place instead.
 */

class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

function reorderList(head: ListNode | null): void {
  if (!head) return;
  let slow = findMiddle(head); //
  let head2 = reverse(slow!.next); //
  slow!.next = null; // to prevent cycle after reversing

  merge(head, head2); //
}

function findMiddle(head: ListNode | null): ListNode | null {
  let slow = head;
  let fast = head;
  while (fast && fast.next) {
    slow = slow!.next;
    fast = fast.next.next;
  }
  return slow;
}

function reverse(head: ListNode | null): ListNode | null {
  let currentHead = head;
  let prev = null;
  while (currentHead) {
    let temp = currentHead.next;
    currentHead.next = prev;
    prev = currentHead;
    currentHead = temp;
  }
  return prev;
}

function merge(headA: ListNode | null, headB: ListNode | null) {
  while (headB) {
    let next = headA!.next;
    headA!.next = headB;
    headA = headB;
    headB = next;
  }
}
