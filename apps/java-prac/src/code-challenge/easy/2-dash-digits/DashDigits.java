

public class DashDigits {
  public static String dashDigits(int number) {

    String numberString = Integer.toString(number);
    StringBuilder finalString = new StringBuilder();

    for (int i = 0; i < numberString.length(); i++) {
      finalString.append(numberString.charAt(i));
      if (i < numberString.length() - 1) {
        finalString.append("-");
      }
      
    }
    return finalString.toString();

  }
  public static void main(String[] args) {
      System.out.println(dashDigits(12345));
  }
}
