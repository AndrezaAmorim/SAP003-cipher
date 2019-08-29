document.getElementById("test").addEventListener("click", message1); // A ação do click deve ser chamado no index.js
document.getElementById ("test2").addEventListener("click", message2);

function message1() {
  event.preventDefault();
  let text = document.getElementById("message").value;
  let key = Number (document.getElementById("key").value);
  let resultado = document.getElementById("result");
  let cifra = window.cipher.encode(key, text);
  resultado.innerHTML=`<p class="highlighter"> Seu resultado é: ${cifra}<p>`; // highlighter imprime com marca texto.
}
 
function message2() {
  event.preventDefault();
  let text = document.getElementById("message").value;
  let key = document.getElementById("key").value;
  let resultado = document.getElementById("result");
  let cifra = window.cipher.decode(key, text);
  resultado.innerHTML=`<p class="highlighter"> Seu resultado é: ${cifra}<p>`;
}
/*Cria a caixa (input) no html, usuario ira colocar o texto e ao clicar no botao esse texto sera 
 chamado no index.js e colocado em uma variavel. Ainda no index.js voce chama
 a função criada no cipher.js para que ele realize a criptografia e retorne o valor para o index.js. */