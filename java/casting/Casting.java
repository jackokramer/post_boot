
// Explicit casting - when we declare the type that we want to convert in our source code.
class Casting{
    public static void main(String[] args){
        double d = 35.25;
        double dd = 35.99;
        // casting double d into an int
        int i = (int)d;
        int ii = (int) dd;
        System.out.println(i);
        System.out.println(ii);
    }
}