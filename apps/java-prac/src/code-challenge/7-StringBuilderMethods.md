# Java StringBuilder Methods Reference

`StringBuilder` in Java is mutable and is commonly used for efficient string manipulation.

> **Tip:** Use `StringBuilder` instead of `String` for heavy string modifications to improve performance, because `String` is immutable and creates new objects on every modification.

---

## 1. Creation

```java
StringBuilder sb1 = new StringBuilder();          // empty
StringBuilder sb2 = new StringBuilder("Hello"); // with initial content
```

---

## 2. Append

```java
sb2.append(" World");     // "Hello World"
sb2.append(123);            // "Hello World123"
```

---

## 3. Insert

```java
sb2.insert(5, ",");       // "Hello, World123"
sb2.insert(0, "Start: ");  // "Start: Hello, World123"
```

---

## 4. Delete

```java
sb2.delete(0, 7);           // removes characters from index 0 to 6
sb2.deleteCharAt(5);         // removes character at index 5
```

---

## 5. Replace

```java
sb2.replace(0, 5, "Hi");   // replaces characters from index 0 to 4 with "Hi"
```

---

## 6. Reverse

```java
sb2.reverse();               // reverses the string in place
```

---

## 7. Capacity & Length

```java
int len = sb2.length();       // number of characters
int cap = sb2.capacity();     // current capacity of buffer
sb2.ensureCapacity(50);       // increase capacity if needed
```

---

## 8. Char Access & Modification

```java
char ch = sb2.charAt(0);      // get char at index 0
sb2.setCharAt(0, 'h');        // set char at index 0
```

---

## 9. Subsequence & Substring

```java
String subStr = sb2.substring(0, 5);  // returns a String
CharSequence subSeq = sb2.subSequence(0, 5); // returns CharSequence
```

---

## 10. Conversion

```java
String result = sb2.toString(); // convert to String
```

---
