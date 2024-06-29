document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const email = document.getElementById('loginEmail').value;
    const password = document.getElementById('loginPassword').value;
            window.location.href = 'feed.html'; // Redirecionando para a página de feed de notícia
    }
});

function showMessage(message) {
    document.getElementById('message').textContent = message;
}
document.getElementById('registerForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    // Aqui você pode adicionar lógica para enviar os dados de login para o servidor PHP
    // e processar a resposta, por exemplo, redirecionando o usuário para a página inicial se o login for bem-sucedido.
    // Aqui, vamos apenas exibir uma mensagem de sucesso fictícia.
    setTimeout(() => {
        window.location.href = 'register.html'; // Redirecionando para a página de feed de notícias
    }, 1000); // Simulando um atraso de 1 segundo para o redirecionamento
});
