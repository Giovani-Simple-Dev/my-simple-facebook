const express = require('express');
const app = express();
const path = require('path');

// Define o diretório de arquivos estáticos
app.use(express.static('source'));

// Rota para a página de perfil
app.get('/profile', (req, res) => {
    res.sendFile(path.join(__dirname, 'profile.html'));
});

// Inicia o servidor
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});
