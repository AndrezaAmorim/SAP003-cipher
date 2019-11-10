document.querySelector('.btn-cifrar').addEventListener("click", messageEncrypted); // A ação do click deve ser chamado no index.js
document.querySelector('.btn-decifrar').addEventListener("click", messageDeciphered);

function messageEncrypted() {
  event.preventDefault();
  let text = document.querySelector('.message').value;
  let key = Number (document.querySelector('.key').value);
  let result = document.querySelector('.result');
  let encrypted = window.cipher.encode(key, text);
  result.innerHTML=`<p class="highlighter"> Mensagem codificada: ${encrypted}<p>`; // highlighter imprime com marca texto.
}
 
function messageDeciphered() {
  event.preventDefault();
  let text = document.querySelector('.message').value;
  let key = document.querySelector('.key').value;
  let result = document.querySelector('.result');
  let deciphered = window.cipher.decode(key, text);
  result.innerHTML=`<p class="highlighter"> Mensagem decodificada: ${deciphered}<p>`;
}
/*Cria a caixa (input) no html, usuario ira colocar o texto e ao clicar no botao esse texto sera 
 chamado no index.js e colocado em uma variavel. Ainda no index.js voce chama
 a função criada no cipher.js para que ele realize a criptografia e retorne o valor para o index.js. */