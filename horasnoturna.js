function mostrarCampos() {
    const adicionalDefinido = document.getElementById('adicionalDefinido').value;
    const camposAdicional = document.getElementById('camposAdicional');
    const valorPorcentagem = document.getElementById('valorPorcentagem');

    if (adicionalDefinido === 'sim') {
        camposAdicional.style.display = 'block';
        valorPorcentagem.setAttribute('required', true);
    } else {
        camposAdicional.style.display = 'none';
        valorPorcentagem.removeAttribute('required');
    }
}

function mostrarCamposHoraExtra() {
    const horaExtraNoturna = document.getElementById('horaExtraNoturna').value;
    const camposHoraExtra = document.getElementById('camposHoraExtra');
    const totalHorasExtra = document.getElementById('totalHorasExtra');

    if (horaExtraNoturna === 'sim') {
        camposHoraExtra.style.display = 'block';
        totalHorasExtra.setAttribute('required', true);
    } else {
        camposHoraExtra.style.display = 'none';
        totalHorasExtra.removeAttribute('required');
    }
}

function calcularAdicionalNoturno() {
    // Lógica de cálculo aqui

    // Exemplo de exibição do resultado
    exibirResultado('R$ 9.14');
}

function exibirResultado(adicionalNoturnoValor) {
    const resultadoDiv = document.getElementById('resultado');
    resultadoDiv.innerHTML = `
        <div class="alert alert-success" role="alert">
            <strong>Resultado:</strong><br>
            Adicional Noturno: ${adicionalNoturnoValor}
        </div>
    `;
    resultadoDiv.style.display = 'block';
}

function limparValores() {
    // Limpar valores do formulário
    document.getElementById('salarioBruto').value = '';
    document.getElementById('horasTrabalhadas').value = '';
    document.getElementById('totalHorasNoturnas').value = '';
    document.getElementById('adicionalDefinido').value = 'nao';
    document.getElementById('valorPorcentagem').value = '';
    document.getElementById('horaExtraNoturna').value = 'nao';
    document.getElementById('totalHorasExtra').value = '';

    // Limpar resultado
    document.getElementById('resultado').style.display = 'none';
    document.getElementById('camposAdicional').style.display = 'none';
    document.getElementById('camposHoraExtra').style.display = 'none';
}

// Adiciona eventos aos elementos que requerem a exibição de campos condicionais
document.getElementById('adicionalDefinido').addEventListener('change', mostrarCampos);
document.getElementById('horaExtraNoturna').addEventListener('change', mostrarCamposHoraExtra);
