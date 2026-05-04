const Usuario = require('./Usuario');

class Administrador extends Usuario {
  constructor(id_usuario, nome, email, senha_hash, ativo = 1) {
    super(id_usuario, nome, email, senha_hash, 'admin', ativo);
  }

  aprovarAnuncio() {
    return 'Anúncio aprovado.';
  }

  reprovarAnuncio() {
    return 'Anúncio reprovado.';
  }
}

module.exports = Administrador;