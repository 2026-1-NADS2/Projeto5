const Usuario = require('../models/Usuario');
const Fornecedor = require('../models/Fornecedor');

class UsuarioService {
  constructor(db) {
    this.db = db;
  }

  listarUsuarios(callback) {
    this.db.all('SELECT * FROM usuarios', [], (err, rows) => {
      callback(err, rows);
    });
  }

  cadastrarUsuario(dados, callback) {
    const usuario = new Usuario(
      null,
      dados.nome,
      dados.email,
      dados.senha_hash,
      dados.tipo_usuario,
      1
    );

    const sql = `
      INSERT INTO usuarios (nome, email, senha_hash, tipo_usuario, ativo)
      VALUES (?, ?, ?, ?, ?)
    `;

    this.db.run(
      sql,
      [
        usuario.nome,
        usuario.email,
        usuario.senha_hash,
        usuario.tipo_usuario,
        usuario.ativo
      ],
      function (err) {
        if (err) return callback(err, null);

        callback(null, {
          id_usuario: this.lastID,
          ...usuario
        });
      }
    );
  }

  cadastrarFornecedor(dados, callback) {
    const fornecedor = new Fornecedor(
      null,
      dados.nome,
      dados.email,
      dados.senha_hash,
      dados.razao_social,
      dados.nome_fantasia,
      dados.cnpj,
      dados.telefone,
      dados.cidade,
      dados.estado
    );

    const sqlUsuario = `
      INSERT INTO usuarios (nome, email, senha_hash, tipo_usuario, ativo)
      VALUES (?, ?, ?, 'fornecedor', 1)
    `;

    this.db.run(
      sqlUsuario,
      [fornecedor.nome, fornecedor.email, fornecedor.senha_hash],
      (err) => {
        if (err) return callback(err, null);

        this.db.get(
          'SELECT id_usuario FROM usuarios WHERE email = ?',
          [fornecedor.email],
          (err2, usuario) => {
            if (err2) return callback(err2, null);
            if (!usuario) return callback(new Error('Usuário não encontrado.'), null);

            const sqlFornecedor = `
              INSERT INTO fornecedores
              (id_usuario, razao_social, nome_fantasia, cnpj, telefone, cidade, estado)
              VALUES (?, ?, ?, ?, ?, ?, ?)
            `;

            this.db.run(
              sqlFornecedor,
              [
                usuario.id_usuario,
                fornecedor.razao_social,
                fornecedor.nome_fantasia,
                fornecedor.cnpj,
                fornecedor.telefone,
                fornecedor.cidade,
                fornecedor.estado
              ],
              function (err3) {
                if (err3) return callback(err3, null);

                callback(null, {
                  id_fornecedor: this.lastID,
                  id_usuario: usuario.id_usuario,
                  nome: fornecedor.nome,
                  email: fornecedor.email,
                  razao_social: fornecedor.razao_social,
                  nome_fantasia: fornecedor.nome_fantasia,
                  cnpj: fornecedor.cnpj,
                  telefone: fornecedor.telefone,
                  cidade: fornecedor.cidade,
                  estado: fornecedor.estado
                });
              }
            );
          }
        );
      }
    );
  }
}

module.exports = UsuarioService;