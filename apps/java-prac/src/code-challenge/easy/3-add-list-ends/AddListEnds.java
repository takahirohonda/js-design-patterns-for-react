
import java.util.ArrayList;
import java.util.Arrays;

public class AddListEnds {
  /**
   * Adds an element to both the beginning and end of an ArrayList
   * Returns a new ArrayList with the element added to both ends
   */
  public static <T> ArrayList<T> addListEnds(ArrayList<T> arrayList, T element) {
    ArrayList<T> result = new ArrayList<>(arrayList);
    result.add(0, element);  // Add to beginning
    result.add(element);     // Add to end
    return result;
  }
  
  public static void main(String[] args) {
    // THis is a diamond operator. So no need to add type in new ArrayList<>
    // Lets the compiler infer the generic type from the variable declaration
      ArrayList<Integer> list = new ArrayList<>(Arrays.asList(1, 2, 3));
      ArrayList<Integer> result = addListEnds(list, 4);
      System.out.println("Original: " + list);
      System.out.println("Result: " + result);
  }
}
