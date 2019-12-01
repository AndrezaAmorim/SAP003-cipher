const messageEncrypted = () => {
  event.preventDefault();
  let text = document.querySelector(".message").value;
  let key = Number (document.querySelector(".key").value);
  let result = document.querySelector(".result");
  let encrypted = window.cipher.encode(key, text);
  result.innerHTML=`<p class="highlighter"> Mensagem codificada: ${encrypted}<p>`; // highlighter imprime com marca texto.
};
 
const messageDeciphered = () => {
  event.preventDefault();
  let text = document.querySelector(".message").value;
  let key = document.querySelector(".key").value;
  let result = document.querySelector(".result");
  let deciphered = window.cipher.decode(key, text);
  result.innerHTML=`<p class="highlighter"> Mensagem decodificada: ${deciphered}<p>`;
};

const destroyMessage = () => {
  location.reload();
};

document.querySelector(".btn-destruir").addEventListener("click", destroyMessage); 
document.querySelector(".btn-cifrar").addEventListener("click", messageEncrypted); 
document.querySelector(".btn-decifrar").addEventListener("click", messageDeciphered);