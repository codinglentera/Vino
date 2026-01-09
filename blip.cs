public class BillingSystem : MonoBehaviour {
    public float hargaPerJam = 5000f;
    private float startTime;
    private bool isOccupied;

    public void MulaiBermain() {
        startTime = Time.time;
        isOccupied = true;
    }

    public void SelesaiBermain() {
        float durasi = (Time.time - startTime) / 3600f; // Konversi ke jam
        int totalBayar = Mathf.CeilToInt(durasi * hargaPerJam);
        EkonomiManager.Instance.TambahUang(totalBayar);
        isOccupied = false;
    }
}
