function converter() {
    const metros = parseFloat(document.getElementById('input-metros').value);
    const unidadeDestino = document.getElementById('unidade-destino').value;
    let resultado;

    if (isNaN(metros)) {
        alert("Por favor, insira um valor válido em metros.");
        return;
    }

    switch (unidadeDestino) {
        case "jarda":
            resultado = metros * 1.09361;
            break;
        case "pe":
            resultado = metros * 3.28084;
            break;
        case "polegada":
            resultado = metros * 39.3701;
            break;
        case "milha":
            resultado = metros * 0.000621371;
            break;
        default:
            resultado = 0;
    }

    document.getElementById('resultado').textContent = `Resultado: ${resultado.toFixed(4)} ${unidadeDestino}(s)`;
}
