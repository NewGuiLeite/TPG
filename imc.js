function calcularIMC() {
    const peso = parseFloat(document.getElementById('peso').value);
    const alturaInput = document.getElementById('altura').value;

    // Convertendo altura para metros
    const altura = converterAltura(alturaInput);

    if (!isNaN(peso) && !isNaN(altura) && altura > 0) {
        const imc = calcularIMCValor(peso, altura);
        const resultado = interpretarIMC(imc);

        exibirResultado(imc.toFixed(1), resultado);
    } else {
        alert('Por favor, digite valores válidos para peso e altura.');
    }
}

function converterAltura(alturaInput) {
    const partesAltura = alturaInput.split(',');

    if (partesAltura.length === 2) {
        const metros = parseFloat(partesAltura[0]);
        const cm = parseFloat(partesAltura[1]);

        if (!isNaN(metros) && !isNaN(cm) && cm >= 0 && cm < 100) {
            return metros + cm / 100;
        }
    }

    return NaN;
}

function calcularIMCValor(peso, altura) {
    return peso / (altura * altura);
}

function interpretarIMC(imc) {
    if (imc < 18.5) {
        return 'Abaixo do Peso';
    } else if (imc < 24.9) {
        return 'Peso Normal';
    } else if (imc < 29.9) {
        return 'Sobrepeso';
    } else if (imc < 34.9) {
        return 'Obesidade Grau I';
    } else if (imc < 39.9) {
        return 'Obesidade Grau II';
    } else {
        return 'Obesidade Grau III';
    }
}

function exibirResultado(imc, resultado) {
    const resultadoDiv = document.getElementById('resultado');
    resultadoDiv.innerHTML = `
        <div class="alert alert-success" role="alert">
            <strong>Resultado:</strong><br>
            IMC: ${imc}<br>
            ${resultado}
            <p class="mt-3">Procure Sempre um Especialista...</p>
        </div>
    `;
    resultadoDiv.style.display = 'block';
}

function limparValores() {
    // Limpar valores do formulário
    document.getElementById('peso').value = '';
    document.getElementById('altura').value = '';

    // Limpar resultado
    document.getElementById('resultado').style.display = 'none';
}
