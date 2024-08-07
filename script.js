// Salvar um post
function savePost(content) {
    const posts = JSON.parse(localStorage.getItem('posts')) || [];
    posts.push({ content });
    localStorage.setItem('posts', JSON.stringify(posts));
}

// Carregar os posts
function loadPosts() {
    const posts = JSON.parse(localStorage.getItem('posts')) || [];
    posts.forEach(post => addPostToList(post));
}

// Adicionar post à lista no HTML
function addPostToList(post) {
    const postItem = document.createElement('div');
    postItem.className = 'post';
    postItem.textContent = post.content;
    document.getElementById('postList').appendChild(postItem);
}

// Configurar o formulário
document.getElementById('postForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const postContent = document.getElementById('postContent').value;
    if (postContent.trim() !== '') {
        savePost(postContent);
        addPostToList({ content: postContent });
        document.getElementById('postContent').value = '';
    }
});

// Carregar posts quando a página é carregada
document.addEventListener('DOMContentLoaded', loadPosts);
