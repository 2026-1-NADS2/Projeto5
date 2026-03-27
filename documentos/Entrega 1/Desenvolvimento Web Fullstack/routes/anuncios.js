const express = require('express');
const router = express.Router();
const db = require('../db');


// GET ALL Pra vizualizar todos os anuncios
router.get('/', (req, res) => {
  try {
    db.all('SELECT * FROM anuncios', [], (err, rows) => {
      if (err) {
        console.error(err);
        return res.status(500).json({ erro: err.message });
      }

      res.status(200).json(rows);
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ erro: 'Erro interno no servidor' });
  }
});


// GET pelo ID vizualizar conforme o id 
router.get('/:id', (req, res) => {
  try {
    db.get(
      'SELECT * FROM anuncios WHERE id_anuncio = ?',
      [req.params.id],
      (err, row) => {
        if (err) {
          console.error(err);
          return res.status(500).json({ erro: err.message });
        }

        if (!row) {
          return res.status(404).json({ erro: 'Anúncio não encontrado' });
        }

        res.status(200).json(row);
      }
    );
  } catch (error) {
    console.error(error);
    res.status(500).json({ erro: 'Erro interno no servidor' });
  }
});


// CREATE Criar o anuncio
router.post('/', (req, res) => {
  try {
    console.log('BODY RECEBIDO:', req.body);

    const body = req.body || {};
    const { id_fornecedor, id_categoria, titulo, descricao, preco } = body;

    if (!id_fornecedor || !id_categoria || !titulo || !descricao || preco == null) {
      return res.status(400).json({ erro: 'Campos obrigatórios' });
    }

    const sql = `
      INSERT INTO anuncios (id_fornecedor, id_categoria, titulo, descricao, preco, status)
      VALUES (?, ?, ?, ?, ?, 'pendente')
    `;

    db.run(
      sql,
      [id_fornecedor, id_categoria, titulo, descricao, preco],
      function (err) {
        if (err) {
          console.error(err);
          return res.status(500).json({ erro: err.message });
        }

        res.status(201).json({
          mensagem: 'Anúncio criado com sucesso',
          id: this.lastID
        });
      }
    );
  } catch (error) {
    console.error(error);
    res.status(500).json({ erro: 'Erro interno no servidor' });
  }
});


// UPDATE atualizar o anuncio
router.put('/:id', (req, res) => {
  try {
    const body = req.body || {};
    const { titulo, descricao, preco } = body;

    db.run(
      `UPDATE anuncios SET titulo = ?, descricao = ?, preco = ? WHERE id_anuncio = ?`,
      [titulo, descricao, preco, req.params.id],
      function (err) {
        if (err) {
          console.error(err);
          return res.status(500).json({ erro: err.message });
        }

        if (this.changes === 0) {
          return res.status(404).json({ erro: 'Anúncio não encontrado' });
        }

        res.status(200).json({ mensagem: 'Atualizado com sucesso' });
      }
    );
  } catch (error) {
    console.error(error);
    res.status(500).json({ erro: 'Erro interno no servidor' });
  }
});


// DELETE Deletar o anuncio conforme o ID
router.delete('/:id', (req, res) => {
  try {
    db.run(
      'DELETE FROM anuncios WHERE id_anuncio = ?',
      [req.params.id],
      function (err) {
        if (err) {
          console.error(err);
          return res.status(500).json({ erro: err.message });
        }

        if (this.changes === 0) {
          return res.status(404).json({ erro: 'Anúncio não encontrado' });
        }

        res.status(200).json({ mensagem: 'Deletado com sucesso' });
      }
    );
  } catch (error) {
    console.error(error);
    res.status(500).json({ erro: 'Erro interno no servidor' });
  }
});

module.exports = router;