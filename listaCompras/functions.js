function cadLista () {
  var lista = document.getElementById('lista');
  var campo = document.getElementById('adiciona');
  lista.innerHTML +='<li>'+campo.value+'</li>';
}

function remove() {
// Obtendo referências
var lista = document.getElementsByTagName('ul')[0];
var itens = lista.getElementsByTagName('li');

// Removendo determinado elemento
lista.removeChild(itens[0]);
}
