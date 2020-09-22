class TestSum{
    public static void main(String[] args){
        long start = System.currentTimeMillis();
        Integer sum = 0;
        for(int x = 0; x < sum.MAX_VALUE; x++){
            sum +=x;
        }
        System.out.println("Sum:" + sum);
        long end =System .currentTimeMillis();
        double total = (double)(end-start)/1000;
        System.out.println("Time of execution:"+ total+ " seconds");
    }
}