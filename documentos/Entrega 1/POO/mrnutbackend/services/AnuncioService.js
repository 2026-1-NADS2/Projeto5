const Anuncio = require('../models/Anuncio');

class AnuncioService {
  constructor(db) {
    this.db = db;
  }

  listarAnuncios(callback) {
    const sql = `
      SELECT 
        a.id_anuncio,
        a.id_fornecedor,
        a.id_categoria,
        a.titulo,
        a.descricao,
        a.preco,
        a.status,
        a.data_criacao,
        c.nome AS categoria
      FROM anuncios a
      INNER JOIN categorias c ON a.id_categoria = c.id_categoria
    `;

    this.db.all(sql, [], (err, rows) => {
      callback(err, rows);
    });
  }

  cadastrarAnuncio(dados, callback) {
    const anuncio = new Anuncio(
      null,
      dados.id_fornecedor,
      dados.id_categoria,
      dados.titulo,
      dados.descricao,
      dados.preco,
      dados.status || 'pendente'
    );

    const sql = `
      INSERT INTO anuncios
      (id_fornecedor, id_categoria, titulo, descricao, preco, status)
      VALUES (?, ?, ?, ?, ?, ?)
    `;

    this.db.run(
      sql,
      [
        anuncio.id_fornecedor,
        anuncio.id_categoria,
        anuncio.titulo,
        anuncio.descricao,
        anuncio.preco,
        anuncio.status
      ],
      function (err) {
        if (err) return callback(err, null);

        callback(null, {
          id_anuncio: this.lastID,
          ...anuncio
        });
      }
    );
  }

  aprovarAnuncio(id_anuncio, id_admin, motivo, callback) {
    this.db.run(
      `UPDATE anuncios SET status = 'aprovado' WHERE id_anuncio = ?`,
      [id_anuncio],
      (err) => {
        if (err) return callback(err, null);

        const sqlAprovacao = `
          INSERT INTO aprovacoes (id_anuncio, id_admin, status_aprovacao, motivo)
          VALUES (?, ?, 'aprovado', ?)
        `;

        this.db.run(sqlAprovacao, [id_anuncio, id_admin, motivo || null], function (err2) {
          if (err2) return callback(err2, null);

          callback(null, { mensagem: 'Anúncio aprovado com sucesso.' });
        });
      }
    );
  }

  reprovarAnuncio(id_anuncio, id_admin, motivo, callback) {
    this.db.run(
      `UPDATE anuncios SET status = 'reprovado' WHERE id_anuncio = ?`,
      [id_anuncio],
      (err) => {
        if (err) return callback(err, null);

        const sqlAprovacao = `
          INSERT INTO aprovacoes (id_anuncio, id_admin, status_aprovacao, motivo)
          VALUES (?, ?, 'reprovado', ?)
        `;

        this.db.run(sqlAprovacao, [id_anuncio, id_admin, motivo || null], function (err2) {
          if (err2) return callback(err2, null);

          callback(null, { mensagem: 'Anúncio reprovado com sucesso.' });
        });
      }
    );
  }
}

module.exports = AnuncioService;