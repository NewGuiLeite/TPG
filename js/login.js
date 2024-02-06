document.addEventListener('DOMContentLoaded', function () {
    const btnLogin = document.querySelector('.btn-login');
    const senhaInput = document.querySelector('input[name="senha"]');

    btnLogin.addEventListener('click', function () {
        fazerLogin();
    });

    senhaInput.addEventListener('keyup', function (event) {
        if (event.key === "Enter") {
            fazerLogin();
        }
    });

    function fazerLogin() {
        // Obtenha os valores dos campos de usuário e senha
        const usuario = document.querySelector('input[name="usuario"]').value;
        const senha = document.querySelector('input[name="senha"]').value;

        // Verifique as credenciais
        if (usuario === 'info' && senha === 'info') {
            // Redirecione para info.html se as credenciais estiverem corretas
            window.location.href = 'info.html';
        } else {
            // Exiba uma mensagem de erro (substitua ou adicione conforme necessário)
            alert('Credenciais inválidas. Tente novamente.');
        }
    }
});
