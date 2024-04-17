document.getElementById('profileForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const fullname = document.getElementById('profileName').value;
    const email = document.getElementById('profileEmail').value;
    const password = document.getElementById('profilePassword').value;

    // Aqui você pode adicionar lógica para enviar os dados de login para o servidor PHP
    // e processar a resposta, por exemplo, redirecionando o usuário para a página inicial se o login for bem-sucedido.
    // Aqui, vamos apenas exibir uma mensagem de sucesso fictícia.
    showMessage('Alterações Salvas com sucesso!');
    setTimeout(() => {
        window.location.href = 'feed.html'; // Redirecionando para a página de feed de notícias
    }, 1000); // Simulando um atraso de 1 segundo para o redirecionamento
});


function previewImage(event) {
    var input = event.target;
    var preview = document.getElementById('preview-image');
    var previewContainer = document.getElementById('file-preview');

    if (input.files && input.files[0]) {
        var reader = new FileReader();

        reader.onload = function(e) {
            preview.src = e.target.result;
            preview.style.display = 'block';
        }

        reader.readAsDataURL(input.files[0]);
        previewContainer.style.display = 'block';
    }
}

function showMessage(message) {
    document.getElementById('message').textContent = message;
};

document.getElementById('profile-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Evita o envio padrão do formulário
    var formData = new FormData(this);

    // Envie os dados do formulário para o backend (neste caso, simulo o envio com um setTimeout)
    setTimeout(function() {
        var profilePicture = document.getElementById('preview-image').src;
        localStorage.setItem('profilePicture', profilePicture); // Armazena a URL da imagem no localStorage
        alert('Perfil atualizado com sucesso!');
    }, 1000); // Simula um atraso de 1 segundo (1000 milissegundos)
});

function previewImage(event) {
    var input = event.target;
    var preview = document.getElementById('preview-image');

    if (input.files && input.files[0]) {
        var reader = new FileReader();

        reader.onload = function(e) {
            preview.src = e.target.result;
            preview.style.display = 'block';
        }

        reader.readAsDataURL(input.files[0]);
    }
};
window.onload = function() {
    fetch('/profile/image')
        .then(response => response.blob())
        .then(blob => {
            const url = URL.createObjectURL(blob);
            document.getElementById('profile-image').src = url;
        });
};