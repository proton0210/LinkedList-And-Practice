function removeNthFromEnd(head: ListNode | null, n: number): ListNode | null {
  // lets get the total elements in the List
  let currentNode = head;
  let count = 0;
  while (currentNode) {
    count++;
    currentNode = currentNode.next;
  }
  let prevNode = head;
  let prevIndex = count - n;
  let idx = 0;
  if (n == count) {
    return head!.next;
  }
  while (idx < prevIndex-1) {
    prevNode = prevNode!.next;
    idx++;
  }
  prevNode!.next = prevNode!.next!.next;
  return head;
}
