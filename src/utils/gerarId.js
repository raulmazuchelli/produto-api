function gerarId(lista) {
    var maxId = 0;

  for(var i = 0; i < lista.length; i++) {
    if(lista[i].id > maxId) {
      maxId = lista[i].id
    }
  }

  return maxId + 1;
}

module.exports = gerarId;