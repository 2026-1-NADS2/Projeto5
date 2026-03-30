const express = require('express');

module.exports = (anuncioService) => {
  const router = express.Router();

  router.get('/', (req, res) => {
    anuncioService.listarAnuncios((err, anuncios) => {
      if (err) return res.status(500).json({ erro: err.message });
      res.json(anuncios);
    });
  });

  router.post('/', (req, res) => {
    anuncioService.cadastrarAnuncio(req.body, (err, anuncio) => {
      if (err) return res.status(500).json({ erro: err.message });
      res.status(201).json(anuncio);
    });
  });

  router.put('/aprovar/:id', (req, res) => {
    const { id } = req.params;
    const { id_admin, motivo } = req.body;

    anuncioService.aprovarAnuncio(id, id_admin, motivo, (err, resultado) => {
      if (err) return res.status(500).json({ erro: err.message });
      res.json(resultado);
    });
  });

  router.put('/reprovar/:id', (req, res) => {
    const { id } = req.params;
    const { id_admin, motivo } = req.body;

    anuncioService.reprovarAnuncio(id, id_admin, motivo, (err, resultado) => {
      if (err) return res.status(500).json({ erro: err.message });
      res.json(resultado);
    });
  });

  return router;
};