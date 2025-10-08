
/*
 * If the score is greater than or equal to 50, return "Pass"
 * Otherwise "Fail"
 */
public class CheckScore {
  public static String checkScore(int score) {
    if (score >= 50) {
      return "Pass";
    }
    return "Fail";
  }

  public static void main(String[] args) {
    var pass = checkScore(50);
    var fail = checkScore(40); 
    System.out.println(String.format("checking the output: (1) %s, (2) %s", pass, fail));  
  }
}


