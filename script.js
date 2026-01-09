let uang = 5000;
let isPlaying = false;

function mulaiBilling() {
    if (!isPlaying) {
        isPlaying = true;
        document.getElementById("status").innerText = "Bermain...";
        
        // Simulasi pelanggan main selama 3 detik
        setTimeout(() => {
            uang += 2000;
            document.getElementById("money").innerText = uang;
            document.getElementById("status").innerText = "Kosong";
            isPlaying = false;
            alert("Pelanggan selesai! Anda dapat Rp 2.000");
        }, 3000);
    }
}
