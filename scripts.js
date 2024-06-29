document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();

    // Aqui você pode adicionar lógica para enviar os dados de login para o servidor
    // e processar a resposta, por exemplo, redirecionando o usuário para a página de feed se o login for bem-sucedido.
    // Vamos simular um redirecionamento após 1 segundo.
    setTimeout(() => {
        window.location.href = 'feed.html'; // Redirecionando para a página de feed de notícias após login bem-sucedido
    }, 1000); // Simulando um atraso de 1 segundo para o redirecionamento
});

function showMessage(message) {
    document.getElementById('message').textContent = message;
}

document.getElementById('registerForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    // Aqui você pode adicionar lógica para enviar os dados de registro para o servidor
    // e processar a resposta, por exemplo, redirecionando o usuário para a página de registro se for bem-sucedido.
    // Aqui, vamos apenas simular um redirecionamento após 1 segundo.
    setTimeout(() => {
        window.location.href = 'register.html'; // Redirecionando para a página de registro após registro bem-sucedido
    }, 1000); // Simulando um atraso de 1 segundo para o redirecionamento
});
