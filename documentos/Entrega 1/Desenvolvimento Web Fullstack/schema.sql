CREATE TABLE anuncios (
  id_anuncio INTEGER PRIMARY KEY AUTOINCREMENT,
  id_fornecedor INTEGER,
  id_categoria INTEGER,
  titulo TEXT,
  descricao TEXT,
  preco REAL,
  status TEXT
);