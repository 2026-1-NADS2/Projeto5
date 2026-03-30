class Usuario {
  constructor(id_usuario, nome, email, senha_hash, tipo_usuario, ativo = 1) {
    this.id_usuario = id_usuario;
    this.nome = nome;
    this.email = email;
    this.senha_hash = senha_hash;
    this.tipo_usuario = tipo_usuario;
    this.ativo = ativo;
  }
}

module.exports = Usuario;