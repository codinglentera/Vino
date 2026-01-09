import time

class WarnetSim:
    def __init__(self):
        self.uang = 5000
        self.pc_aktif = False

    def jalankan_billing(self):
        print("Mulai billing PC 01...")
        self.pc_aktif = True
        time.sleep(3) # Tunggu 3 detik
        self.uang += 2000
        self.pc_aktif = False
        print(f"Selesai! Uang sekarang: Rp {self.uang}")

game = WarnetSim()
game.jalankan_billing()
