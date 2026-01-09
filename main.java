public class GameCore {
    public static void main(String[] args) {
        int coins = 500; // Example starting
        int multiplier = 1;
        
        // Buy 8x Upgrade logic
        if (coins >= 500) {
            coins -= 500;
            multiplier = 8;
            System.out.println("Upgrade 8x Activated!");
        }
    }
}
