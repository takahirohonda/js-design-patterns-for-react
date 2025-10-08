# Notes

String.concat() doesn’t modify the original string (it returns a new one).String.concat() doesn’t modify the original string (it returns a new one).

So use string.append()

This doesn't work.

```java
public static String dashDigits(int number) {

    String numberString = Integer.toString(number);
    String finalString = "";

    for (int i = 0; i < numberString.length() - 1; i++) {
      if (i == numberString.length() - 1) {
        finalString.concat(numberString);
      }
      finalString.concat(numberString.charAt(i) + "-");

    }
    return finalString;

  }
```

StringBuilder is the preferred way to build strings in a loop — it’s efficient.

String.concat() returns a new string but doesn’t change the original one — so your earlier code wasn’t updating finalString.

The condition if (i < numberString.length() - 1) ensures we don’t add a dash after the last digit.
