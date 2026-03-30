const express = require('express');

module.exports = (usuarioService) => {
  const router = express.Router();

  router.get('/', (req, res) => {
    usuarioService.listarUsuarios((err, usuarios) => {
      if (err) return res.status(500).json({ erro: err.message });
      res.json(usuarios);
    });
  });

  router.post('/', (req, res) => {
    usuarioService.cadastrarUsuario(req.body, (err, usuario) => {
      if (err) return res.status(500).json({ erro: err.message });
      res.status(201).json(usuario);
    });
  });

  router.post('/fornecedor', (req, res) => {
    usuarioService.cadastrarFornecedor(req.body, (err, fornecedor) => {
      if (err) return res.status(500).json({ erro: err.message });
      res.status(201).json(fornecedor);
    });
  });

  return router;
};