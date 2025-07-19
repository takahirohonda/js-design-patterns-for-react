# Linked List vs Array List

Adding or removing a node to the start of the array takes o(n) because we have to shift the index for all the items.

```ts
const array1 = [a, b, c, d]

array1.push(e)
// [e, a, b, c, d]
// all the element shifted one position to the right
```

With Linked List, it is O(1) no matter how long the list is.

To find nth element, with Linked list, we have to do a for loop. The complexity is O(n). With an array, this is O(1)
