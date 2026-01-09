using System;

public class ClickerGame {
    public int Coins = 0;
    public int Multiplier = 1;

    public void OnClick() {
        Coins += (1 * Multiplier);
        Console.WriteLine("Coins: " + Coins);
    }

    public void BuyUpgrade(int m, int price) {
        if (Coins >= price) {
            Coins -= price;
            Multiplier = m;
            Console.WriteLine("Upgraded to x" + m);
        }
    }
}
