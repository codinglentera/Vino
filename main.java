public class WarnetBilling {
    public static void main(String[] args) {
        int saldo = 5000;
        int hargaPerJam = 3000;
        
        System.out.println("Sistem Billing Warnet 2026 Aktif");
        System.out.println("Saldo Awal: " + saldo);
        
        // Logika penambahan saldo
        saldo += hargaPerJam;
        System.out.println("Satu jam berlalu. Saldo Baru: " + saldo);
    }
}
