# Java Number Methods Reference

Java provides several wrapper classes for numbers: `Integer`, `Double`, `Float`, `Long`, `Short`, `Byte`. Here is a concise reference for common methods.

> **Tip:** For performance-critical code, prefer primitive types (`int`, `double`) over wrapper classes to avoid unnecessary object creation.

---

## 1. Creation & Basic Info

```java
int i = 123;
Integer intObj = Integer.valueOf(i);

double d = 3.14;
Double doubleObj = Double.valueOf(d);
```

---

## 2. Conversion Between Types

```java
int i = 123;
double d = i;                 // primitive widening
Integer intObj = i;
int i2 = intObj.intValue();    // unwrap to primitive
String s = Integer.toString(i); // "123"
int parsed = Integer.parseInt("456"); // 456
```

---

## 3. Common Math Operations

```java
int max = Math.max(10, 20);      // 20
int min = Math.min(10, 20);      // 10
double sqrt = Math.sqrt(16);     // 4.0
double pow = Math.pow(2, 3);     // 8.0
int abs = Math.abs(-5);           // 5
double random = Math.random();   // 0.0 <= random < 1.0
```

---

## 4. Checking Properties

```java
boolean isFinite = Double.isFinite(3.14);  // true
boolean isNaN = Double.isNaN(Double.NaN);  // true
boolean isInfinite = Double.isInfinite(Double.POSITIVE_INFINITY); // true
```

---

## 5. Comparing Numbers

```java
int cmp = Integer.compare(10, 20); // -1
boolean eq = Integer.valueOf(10).equals(10); // true
```

---

## 6. Conversion Between Strings and Numbers

```java
String s = "123";
int i = Integer.parseInt(s);       // 123
double d = Double.parseDouble("3.14"); // 3.14
String s2 = Double.toString(3.14); // "3.14"
```

---

## 7. Number Formatting

```java
import java.text.DecimalFormat;

DecimalFormat df = new DecimalFormat("#.##");
String formatted = df.format(3.14159); // "3.14"
```

---

## 8. Useful Constants

```java
int maxInt = Integer.MAX_VALUE;   // 2147483647
int minInt = Integer.MIN_VALUE;   // -2147483648
double maxDouble = Double.MAX_VALUE;
double minDouble = Double.MIN_VALUE;
```

---

# More notes

## (1) Finding Even number with Java and JS

| Language       | Best Simple Check | Best for Arrays/Lists               | Notes                               |
| -------------- | ----------------- | ----------------------------------- | ----------------------------------- |
| **Java**       | `num % 2 == 0`    | `.stream().filter(n -> n % 2 == 0)` | Clear, efficient                    |
| **JavaScript** | `num % 2 === 0`   | `.filter(n => n % 2 === 0)`         | Clean and expressive                |
| **Both**       | `(num & 1) == 0`  | —                                   | Bitwise (advanced, micro-optimized) |

```java
import java.util.*;
import java.util.stream.Collectors;

// Finding even number from the array of string values
public class EvenNumbers {
    public static void main(String[] args) {
        List<Integer> numbers = Arrays.asList(1, 2, 3, 4, 5, 6);

        List<Integer> evens = numbers.stream()
                                     .filter(n -> n % 2 == 0)
                                     .collect(Collectors.toList());

        System.out.println(evens); // [2, 4, 6]
    }
}
```
