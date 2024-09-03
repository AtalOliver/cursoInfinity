document.getElementById('calculate').addEventListener('click', () => {
    const total = parseFloat(document.getElementById('total').value);
    const serviceQuality = parseFloat(document.getElementById('service').value);

    if (isNaN(total) || total <= 0) {
        alert("Por favor, insira um valor válido para a conta.");
        return;
    }

    const calculateTip = (total, serviceQuality, callback) => {
        const tip = total * serviceQuality;
        callback(tip);
    };

    const displayResults = (tip) => {
        const totalWithTip = total + tip;
        document.getElementById('tip').innerText = tip.toFixed(2);
        document.getElementById('totalWithTip').innerText = totalWithTip.toFixed(2);
    };

    calculateTip(total, serviceQuality, displayResults);
});
