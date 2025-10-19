import java.util.Arrays;

public class AddEvenNumbers {
  /**
   * Return the sum of all even numbers up to the given number.
   * The number is inclusive.
   */
  public static int addEvenNumbers1(int n) {
    if (n <= 0) {
        return 0;
    }
    
    if (n % 2 != 0) {
        n--; // make it even
    }
    
    return n + addEvenNumbers(n - 2);
  }
  
  public static int addEvenNumbers(int n) {
   
    int sum = 0;
    for (int i = 2; i <= n; i += 2) {
      sum += i;
    }
    return sum;
  }

  public static void main(String[] args) {
      System.out.println("Checking calculation for 10:" + addEvenNumbers(10));
      System.out.println("Checking calculation for 8:" + addEvenNumbers(8));
  }
}
