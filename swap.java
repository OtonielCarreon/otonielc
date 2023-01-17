public class swap {

   static int x = 20;
   static int y = 5;

   public static void main(String[] args) {

      System.out.println("The value for x is " + x);
      System.out.println("The value for y is " + y);

      int temp = x;
      x = y;
      y = temp;

      System.out.println("The value for x is " + x);
      System.out.println("The value for y is " + y);

   }

   public static void printID() {
      System.out.println("I really love coding!");
   }
}