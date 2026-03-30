const express = require('express');
const SistemaMrNut = require('./SistemaMrNut');

const app = express();
app.use(express.json());

const sistema = new SistemaMrNut();
sistema.iniciar();

app.use('/usuarios', require('./routes/usuarios')(sistema.getUsuarioService()));
app.use('/anuncios', require('./routes/anuncios')(sistema.getAnuncioService()));

app.get('/', (req, res) => {
  res.json({ mensagem: 'API Mr.Nut funcionando.' });
});

app.listen(3000, () => {
  console.log('Servidor rodando em http://localhost:3000');
});