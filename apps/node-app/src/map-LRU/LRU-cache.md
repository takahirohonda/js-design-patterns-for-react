# LRU (Least Recently Used) cache

This is a problem of evicting least recently used cache. It can be represented by hashmap and doubly linked list.

## Examples

```mermaid
flowchart LR
  subgraph HashMap [Hash Map]
    key1["key1 ➜ Node A"]
    key2["key2 ➜ Node B"]
    key3["key3 ➜ Node C"]
  end

  subgraph UsageOrder [Doubly Linked List (Most → Least Recently Used)]
    head((HEAD)) --> A["Node A (key1: 1)"] --> B["Node B (key2: 2)"] --> C["Node C (key3: 3)"] --> tail((TAIL))
    C --> B
    B --> A
    A --> head
  end

  key1 --> A
  key2 --> B
  key3 --> C
```
