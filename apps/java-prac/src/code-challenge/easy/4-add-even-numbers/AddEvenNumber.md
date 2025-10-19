# notes

This doesn't work because array is empty.

```java
public static int addEvenNumbers(int n) {
   int[] evenNumbers = new int[(int) Math.floor(n / 2)];

    return Arrays.stream(evenNumbers).reduce(0, (acc, evenNumber) -> acc + evenNumber);
  }
```

This doesn't work:

You call addEvenNumbers() twice, and both times you restart from scratch.
That means your recursion doesn’t progress correctly — it restarts the entire computation each time.

```java
public static int addEvenNumbers1(int n) {
    int maxNumber;
    if (n % 2 == 0) {
      maxNumber = n;
    } else {
      maxNumber = n - 1;
    }

    if (maxNumber == 0) {
      return 0;
    }

    return addEvenNumbers(maxNumber) + addEvenNumbers(maxNumber-1);
  }
```
