# Java String Methods Reference

> **Tip:** Use `StringBuilder` instead of `String` for heavy string modifications to improve performance, because `String` is immutable and creates new objects on every modification.

Java `String` is immutable. Here are common methods you’ll use:

---

## 1. Creation & Basic Info

```java
String s = "Hello";
String s2 = new String("World");

int length = s.length();        // length of string
boolean empty = s.isEmpty();    // true if empty
char ch = s.charAt(0);          // get char at index
```

---

## 2. Comparison

```java
boolean eq = s.equals("Hello");         // true
boolean eqIgnore = s.equalsIgnoreCase("hello"); // true
int cmp = s.compareTo("World");         // lexicographical comparison
```

---

## 3. Searching

```java
boolean contains = s.contains("ell");   // true
int index = s.indexOf('l');             // first occurrence
int lastIndex = s.lastIndexOf('l');     // last occurrence
boolean starts = s.startsWith("He");    // true
boolean ends = s.endsWith("lo");        // true
```

---

## 4. Substring & Splitting

```java
String sub = s.substring(1, 4);        // "ell"
String[] parts = s.split("l");          // ["He", "", "o"]
```

---

## 5. Case Conversion

```java
String upper = s.toUpperCase();         // "HELLO"
String lower = s.toLowerCase();         // "hello"
```

---

## 6. Trimming & Replacing

```java
String trimmed = s.trim();              // removes leading/trailing spaces
String replaced = s.replace('l', 'x'); // "Hexxo"
String replacedAll = s.replaceAll("l", "x"); // uses regex
```

---

## 7. Conversion

```java
String fromInt = String.valueOf(123);   // "123"
int num = Integer.parseInt("123");      // 123
char[] chars = s.toCharArray();         // ['H','e','l','l','o']
```

---

## 8. Concatenation

```java
String s3 = s + " World";               // "Hello World"
String s4 = s.concat(" World");         // "Hello World"
```

---

## 9. StringBuilder / StringBuffer (Mutable Alternative)

```java
StringBuilder sb = new StringBuilder("Hello");
sb.append(" World");
sb.insert(5, ",");
sb.delete(5, 6);
String result = sb.toString();
```

---

## 10. Useful Boolean Checks

```java
boolean isBlank = s.isBlank();          // true if empty or only spaces
boolean matches = s.matches("\\w+");    // regex match
```

---

> **Tip:** Strings are immutable in Java, so most methods return a **new string** instead of modifying the original.
