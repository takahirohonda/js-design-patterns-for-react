# Map

The solution to a lot of interview questions ended up being hash map 😂.

## 1. Terminology

`load factor`: The amount of data points vs the amount of storage (data.len / storage.capacity).
`key`: a value that is hashable and is used to look up data. The hash has to be consistent.
`value`: a value that is associated with a key.
`collision`: when 2 keys map to the same cell.

## What is map?

It can be represented as array list. Key is mapped to a value.

hash(k) => V

## Examples

Basic Hash Map

```mermaid
flowchart TB
  subgraph HashMap
    direction TB
    slot0["0"] --> l0["(empty)"]
    slot1["1"] --> l1["keyA: 10"]
    slot2["2"] --> l2["keyB: 15"] --> l3["keyC: 20"]
    slot3["3"] --> l4["(empty)"]
    slot4["4"] --> l5["keyD: 50"]
  end

  classDef slotStyle fill:#f9f,stroke:#333,stroke-width:1px;
  class slot0,slot1,slot2,slot3,slot4 slotStyle;
```

Visualising a hash function.

```mermaid
flowchart LR
  input["Input: keyC"] --> hashFunc["Hash Function"]
  hashFunc --> modFunc["Mod Table Size (e.g., % 5)"]
  modFunc --> bucket["Goes to Bucket 2"]
```
