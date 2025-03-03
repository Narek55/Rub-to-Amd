let previousRate = null;

async function fetchExchangeRate() {
    try {
        const response = await fetch("https://api.exchangerate-api.com/v4/latest/RUB");
        const data = await response.json();
        const rate = data.rates.AMD;

        const exchangeRateElement = document.getElementById("exchangeRate");
        const upDownElement = document.getElementById("up_down");

        if (previousRate !== null) {
            if (rate > previousRate) {
                upDownElement.innerText = "UP";
                upDownElement.style.backgroundColor = "green";
                exchangeRateElement.style.color = "green";
            } else if (rate < previousRate) {
                upDownElement.innerText = "DOWN";
                upDownElement.style.backgroundColor = "red";
                exchangeRateElement.style.color = "red";
            } else {
                upDownElement.innerText = "SAME";
                upDownElement.style.backgroundColor = "gray";
                exchangeRateElement.style.color = "black";
            }
        }

        exchangeRateElement.innerText = rate.toFixed(2);

        previousRate = rate;
    } catch (error) {
        console.error("ERROR:", error);
        document.getElementById("exchangeRate").innerText = "...";
    }
}

fetchExchangeRate();
setInterval(fetchExchangeRate, 60000);