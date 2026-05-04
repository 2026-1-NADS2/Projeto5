class Anuncio {
  constructor(
    id_anuncio,
    id_fornecedor,
    id_categoria,
    titulo,
    descricao,
    preco,
    status = 'pendente'
  ) {
    this.id_anuncio = id_anuncio;
    this.id_fornecedor = id_fornecedor;
    this.id_categoria = id_categoria;
    this.titulo = titulo;
    this.descricao = descricao;
    this.preco = preco;
    this.status = status;
  }
}

module.exports = Anuncio;