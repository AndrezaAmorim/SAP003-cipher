const messageEncrypted = () => {
  event.preventDefault();
  let text = document.querySelector(".message").value;
  let key = Number (document.querySelector(".key").value);
  let result = document.querySelector(".result");
  let encrypted = window.cipher.encode(key, text);
  result.innerHTML=`<p> Mensagem codificada: ${encrypted}<p>`;
};
 
const messageDeciphered = () => {
  event.preventDefault();
  let text = document.querySelector(".message").value;
  let key = document.querySelector(".key").value;
  let result = document.querySelector(".result");
  let deciphered = window.cipher.decode(key, text);
  result.innerHTML=`<p> Mensagem decodificada: ${deciphered}<p>`;
};

const eraseMessage = () => {
  Location.reload();
};

document.querySelector(".btn-apagar").addEventListener("click", eraseMessage); 
document.querySelector(".btn-cifrar").addEventListener("click", messageEncrypted); 
document.querySelector(".btn-decifrar").addEventListener("click", messageDeciphered);