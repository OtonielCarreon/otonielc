public class swap {

   public static void main(String[] args) {
      int x = 20;
      int y = 5;

      System.out.println("The value for x is " + x);
      System.out.println("The value for y is " + y);

      int temp = x;
      x = y;
      y = temp;

      System.out.println("The value for x is " + x);
      System.out.println("The value for y is " + y);

   }

}