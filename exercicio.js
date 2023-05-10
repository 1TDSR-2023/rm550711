
function mudarCorDeFundo() {
    var body = document.querySelector('body');
    body.style.backgroundColor = '#ff0000'; 
  }
  
  function adicionarItem() {
    var input = document.getElementById('item');
    var valor = input.value;
  
    var lista = document.getElementById('lista');
    var newItem = document.createElement('li');
    newItem.textContent = valor;
    lista.appendChild(newItem);
  
    input.value = ''; 
  }
  
  var imagemAtual = 1;

function alternarImagem() {
  var imagem = document.getElementById('imagem');
  
  if (imagemAtual === 1) {
    imagem.src = './img/capa2.jpg'; 
    imagemAtual = 2;
  } else {
    imagem.src = './img/capa1.jpg'; 
    imagemAtual = 1;
  }
}
  
  function exibirMensagem() {
    var elemento = document.getElementById('mensagem');
    elemento.textContent = 'Só assisto o desenho acima quando estou sem nada para fazer';
  }
  
  function ocultarElemento() {
    var elemento = document.getElementById('elemento-oculto');
    elemento.style.display = 'none';
  }