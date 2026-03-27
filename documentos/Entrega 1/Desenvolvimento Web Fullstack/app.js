const express = require('express');
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const anunciosRoutes = require('./routes/anuncios');
app.use('/anuncios', anunciosRoutes);

app.get('/', (req, res) => {
  res.json({ mensagem: 'API funcionando' });
});

app.listen(3000, () => {
  console.log('Servidor rodando em http://localhost:3000');
});