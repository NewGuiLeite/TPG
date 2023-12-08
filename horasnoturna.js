function calcularHorasNoturnas() {
    // Obter os valores do formulário
    const salario = parseFloat(document.getElementById('salario').value) || 0;
    const horasNormais = parseFloat(document.getElementById('horasNormais').value) || 0;
    const horasNoturnas = parseFloat(document.getElementById('horasNoturnas').value) || 0;
    const adicionalNoturno = parseFloat(document.getElementById('adicionalNoturno').value) || 0;

    // Calcular horas noturnas
    const horasNoturnasReais = calcularHorasNoturnasReais(horasNoturnas);

    // Calcular adicional noturno
    const adicionalNoturnoValor = calcularAdicionalNoturno(salario, adicionalNoturno, horasNoturnasReais);

    // Calcular salário total
    const salarioTotal = salario + adicionalNoturnoValor;

    // Exibir resultados
    exibirResultado(horasNormais, horasNoturnasReais, adicionalNoturnoValor, salarioTotal);
}

function calcularHorasNoturnasReais(horasNoturnas) {
    // Implementar lógica para calcular horas noturnas reais
    // Exemplo: assumindo que 1 hora noturna equivale a 52 minutos e 30 segundos
    const fatorReducao = 60 / 52.5;
    const horasNoturnasReais = horasNoturnas * fatorReducao;
    return horasNoturnasReais.toFixed(2);
}

function calcularAdicionalNoturno(salario, adicionalNoturno, horasNoturnas) {
    // Implementar lógica para calcular adicional noturno
    return (salario * adicionalNoturno * horasNoturnas).toFixed(2);
}

function exibirResultado(horasNormais, horasNoturnas, adicionalNoturno, salarioTotal) {
    const resultadoDiv = document.getElementById('resultado');
    resultadoDiv.innerHTML = `
        <strong>Resultado:</strong><br>
        Horas Normais: ${horasNormais} horas<br>
        Horas Noturnas: ${horasNoturnas} horas<br>
        Adicional Noturno: R$ ${adicionalNoturno}<br>
        Salário Total: R$ ${salarioTotal}
    `;
    resultadoDiv.style.display = 'block';
}
