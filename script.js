let coins = 0;
let multiplier = 1;
let hasMachine = false;

const coinText = document.getElementById("coins");
const clickBtn = document.getElementById("click-btn");

clickBtn.addEventListener("click", () => {
    coins += (1 * multiplier);
    updateUI();
});

function buyUpgrade(mult, price) {
    if (coins >= price) {
        coins -= price;
        multiplier = mult;
        alert("Upgrade Success! Now x" + mult);
        updateUI();
    } else {
        alert("Not enough coins!");
    }
}

function buyAutoMachine() {
    if (coins >= 300 && !hasMachine) {
        coins -= 300;
        hasMachine = true;
        document.getElementById("machine-btn").innerText = "OWNED";
        setInterval(() => {
            coins += 10;
            updateUI();
        }, 10000); // 10 seconds
        updateUI();
    }
}

function updateUI() {
    coinText.innerText = coins;
}
