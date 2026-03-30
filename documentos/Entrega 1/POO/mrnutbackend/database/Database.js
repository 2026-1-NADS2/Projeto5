const sqlite3 = require('sqlite3').verbose();

class Database {
  constructor() {
    this.db = new sqlite3.Database('./Marketplace B2B.db', (err) => {
      if (err) {
        console.error('Erro ao conectar ao banco:', err.message);
      } else {
        console.log('Banco SQLite conectado com sucesso.');
      }
    });
  }

  getConnection() {
    return this.db;
  }
}

module.exports = Database;