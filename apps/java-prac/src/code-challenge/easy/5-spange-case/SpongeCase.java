

public class SpongeCase {
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
