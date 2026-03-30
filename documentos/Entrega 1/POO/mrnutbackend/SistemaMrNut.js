const Database = require('./database/Database');
const UsuarioService = require('./services/UsuarioService');
const AnuncioService = require('./services/AnuncioService');

class SistemaMrNut {
  constructor() {
    this.database = new Database();
    this.db = this.database.getConnection();

    this.usuarioService = new UsuarioService(this.db);
    this.anuncioService = new AnuncioService(this.db);
  }

  iniciar() {
    console.log('=================================');
    console.log('Sistema Mr.Nut iniciado');
    console.log('Banco existente conectado');
    console.log('Serviços carregados com sucesso');
    console.log('=================================');
  }

  getUsuarioService() {
    return this.usuarioService;
  }

  getAnuncioService() {
    return this.anuncioService;
  }
}

module.exports = SistemaMrNut;