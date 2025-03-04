# Stack

It's similar to queue, except it's backward.

Only add or remove from head

queue: A -> B -> C -> D

stack: A <- B <- C <- D

stack trace -> stack of functions we called up to this point.

When we add to stack, head is gonna be a new node and the new node will points to the previous head.

A <- B <- C <- D

A <- B <- C <- D <- E

D is head

this.head = E

push
pop
peak

Only allowing pushing and popping from one-side.
