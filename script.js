document.addEventListener('DOMContentLoaded', function () {
    // Função para obter e preencher o valor atual do dólar
    function obterValorDolarAtual() {
        const apiUrl = 'https://economia.awesomeapi.com.br/last/USD-BRL';

        axios.get(apiUrl)
            .then(response => {
                const valorDolarAtual = response.data.USDBRL.bid;
                document.getElementById('valorDolarUsuario').value = valorDolarAtual;
            })
            .catch(error => {
                console.error('Erro ao obter a taxa de câmbio:', error);
                alert('Erro ao obter a taxa de câmbio. Tente novamente mais tarde.');
            });
    }

    // Chamar a função ao carregar a página
    obterValorDolarAtual();

    // Adicionar evento de clique ao botão de converter
    document.getElementById('button-converter').addEventListener('click', function () {
        const valorReal = document.getElementById('valorReal').value;
        const valorDolarUsuario = document.getElementById('valorDolarUsuario').value;

        if (!valorDolarUsuario) {
            alert('Por favor, informe o valor do dólar.');
            return;
        }

        const valorDolar = (valorReal / valorDolarUsuario).toFixed(2);
        document.getElementById('valorDolar').innerText = `$${valorDolar}`;
    });


});
