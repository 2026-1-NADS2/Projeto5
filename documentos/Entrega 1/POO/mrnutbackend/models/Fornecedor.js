const Usuario = require('./Usuario');

class Fornecedor extends Usuario {
  constructor(
    id_usuario,
    nome,
    email,
    senha_hash,
    razao_social,
    nome_fantasia,
    cnpj,
    telefone,
    cidade,
    estado
  ) {
    super(id_usuario, nome, email, senha_hash, 'fornecedor', 1);
    this.razao_social = razao_social;
    this.nome_fantasia = nome_fantasia;
    this.cnpj = cnpj;
    this.telefone = telefone;
    this.cidade = cidade;
    this.estado = estado;
  }
}

module.exports = Fornecedor;