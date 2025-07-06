describe('Add Two Numbers', () => {
  it('should return the sum of two numbers represented as linked lists', () => {
    interface ListNode {
      val: number
      next: ListNode | null
    }

    const addTwoNumbers = (
      l1: ListNode | null,
      l2: ListNode | null
    ): ListNode | null => {
      const dummyHead: ListNode = { val: 0, next: null }
      let current: ListNode = dummyHead
      let carry = 0

      while (l1 || l2 || carry) {
        const x = l1 ? l1.val : 0
        const y = l2 ? l2.val : 0
        const sum = x + y + carry
        carry = Math.floor(sum / 10)
        current.next = { val: sum % 10, next: null }
        current = current.next

        if (l1) l1 = l1.next
        if (l2) l2 = l2.next
      }

      return dummyHead.next
    }

    // Helper function to create a linked list from an array
    const createListNode = (arr: number[]): ListNode | null => {
      const dummyHead: ListNode = { val: 0, next: null }
      let current: ListNode = dummyHead
      for (const num of arr) {
        current.next = { val: num, next: null }
        current = current.next
      }
      return dummyHead.next
    }

    // Test cases
    expect(
      addTwoNumbers(createListNode([2, 4, 3]), createListNode([5, 6, 4]))
    ).toEqual(createListNode([7, 0, 8]))
    expect(addTwoNumbers(createListNode([0]), createListNode([0]))).toEqual(
      createListNode([0])
    )
    expect(
      addTwoNumbers(createListNode([9, 9, 9]), createListNode([1]))
    ).toEqual(createListNode([0, 0, 0, 1]))
  })
})
