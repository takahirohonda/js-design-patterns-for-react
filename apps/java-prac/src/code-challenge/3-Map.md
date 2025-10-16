# Map & Set

| Interface       | Backed by                | Maintains Order?   | Allows nulls?         |
| --------------- | ------------------------ | ------------------ | --------------------- |
| `HashSet`       | `HashMap`                | ❌ Unordered       | ✅ Yes                |
| `LinkedHashSet` | `LinkedHashMap`          | ✅ Insertion order | ✅ Yes                |
| `TreeSet`       | `TreeMap`                | ✅ Sorted order    | ❌ No (by default)    |
| `HashMap`       | Hash table               | ❌ Unordered       | ✅ Yes (one null key) |
| `LinkedHashMap` | Hash table + linked list | ✅ Insertion order | ✅ Yes                |
| `TreeMap`       | Red-black tree           | ✅ Sorted by key   | ❌ No (by default)    |

| Aspect      | **Set**          | **Map**                      |
| ----------- | ---------------- | ---------------------------- |
| Stores      | Unique values    | Key–value pairs              |
| Lookup by   | Value            | Key                          |
| Duplicates  | Not allowed      | Keys not allowed, values can |
| Backed by   | Map (internally) | Hash table or tree           |
| Example use | Unique user IDs  | Username → Email mapping     |

## Map

- HashMap
- LinkedHashMap
- WeakHashMap: Garbage collected once the key is not in use.
- EnumMap: Emum element is used as a key.
- SortedMap Interface - use TreeMap to initialise
- NavigableMap Interface - use TreeMap to initialise
- TreeMap
- ConcurrentMap Interface - thread safe synchronised map. Use ConcurrentHashMap to initialise it.
- ConcurrentHashMap

JSON in JS is similar to `LinkedHashMap`. The most JS engine preserve insertion order of the JSON (although a plane JS object is an unordered collection).

To parse JSON in Java, the parser needs a structure that can store `key–value pairs — and preserve order`. -> use `LinkedHashMap`.

```java
import com.fasterxml.jackson.databind.ObjectMapper;
import java.util.Map;

public class Main {
  public static void main(String[] args) throws Exception {
    String json = "{\"name\":\"Alice\",\"age\":25,\"city\":\"Melbourne\"}";

    ObjectMapper mapper = new ObjectMapper();
    Map<String, Object> map = mapper.readValue(json, Map.class);

    System.out.println(map.getClass()); // class java.util.LinkedHashMap
    System.out.println(map); // {name=Alice, age=25, city=Melbourne}
  }
}
```

| JSON Type        | Java Equivalent                 | Notes                     |
| ---------------- | ------------------------------- | ------------------------- |
| `{}` (object)    | `LinkedHashMap<String, Object>` | Ordered key–value mapping |
| `[]` (array)     | `ArrayList<Object>`             | Ordered list of values    |
| `"string"`       | `String`                        | Primitive                 |
| `123`            | `Integer`, `Long`, or `Double`  | Depending on parser       |
| `true` / `false` | `Boolean`                       | Primitive                 |
| `null`           | `null`                          | Same null                 |
