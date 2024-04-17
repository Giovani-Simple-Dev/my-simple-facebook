document.getElementById('registerForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const email = document.getElementById('regiseremail').value;
    const password = document.getElementById('registerpassword').value;

    // Aqui você pode adicionar lógica para enviar os dados de login para o servidor PHP
    // e processar a resposta, por exemplo, redirecionando o usuário para a página inicial se o login for bem-sucedido.
    // Aqui, vamos apenas exibir uma mensagem de sucesso fictícia.
    showMessage('Registro realizado com sucesso!');
    window.location.href = 'feed.html';
});

function showMessage(message) {
    // Aqui você pode exibir a mensagem em algum lugar na página, como abaixo do botão de login.
    alert(message);
}
