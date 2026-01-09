// Contoh skrip sederhana untuk mendeteksi komponen PC di meja
public class MejaSensor : MonoBehaviour {
    public bool isHasMonitor, isHasCPU, isHasKeyboard;

    void OnTriggerEnter(Collider other) {
        if (other.CompareTag("Monitor")) isHasMonitor = true;
        if (other.CompareTag("CPU")) isHasCPU = true;
        if (other.CompareTag("Keyboard")) isHasKeyboard = true;

        CheckPCReady();
    }

    void CheckPCReady() {
        if (isHasMonitor && isHasCPU && isHasKeyboard) {
            Debug.Log("PC Siap Digunakan!");
        }
    }
}
