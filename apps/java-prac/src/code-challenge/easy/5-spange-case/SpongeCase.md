# Notes

`string.split('')` in Java

```java
import java.util.Arrays;

public class SplitExample {
    public static void main(String[] args) {
        String a = "hello";
        String[] letters = a.split("");
        System.out.println(Arrays.toString(letters));
    }
}
```

`Character` method

```java
char c = 'A';

if (Character.isUpperCase(c)) {
    System.out.println("Uppercase");
} else if (Character.isLowerCase(c)) {
    System.out.println("Lowercase");
} else {
    System.out.println("Not a letter");
}
```
