window.cipher = {
  encode: encode,
  decode: decode,
};

function encode(offset, text) {
  let resultado=[];

  for (let i=0; i<text.length; i++) {
    if (text[i].charCodeAt()>=65 && text[i].charCodeAt()<=90) {
      resultado += String.fromCharCode(((text[i].charCodeAt()-65+offset)%26)+65);
    }
    else if (text[i].charCodeAt()>=97 && text[i].charCodeAt()<=122) {
      resultado += String.fromCharCode(((text[i].charCodeAt()-97+offset)%26)+97);
    }
    else {
      resultado += text[i];
    }
    // else if (text[i].charCodeAt()>=32 && text[i].charCodeAt()<=64) {
    //   resultado +=String.fromCharCode(text[i].charCodeAt());
    // }
    // else if (text[i].charCodeAt()>=91 && text[i].charCodeAt()<=96) {
    //   resultado +=String.fromCharCode(text[i].charCodeAt());
    // }
    // else if (text[i].charCodeAt()>=123 && text[i].charCodeAt()<=255) {
    //   resultado +=String.fromCharCode(text[i].charCodeAt());
    // }
  }
  return resultado;
}

function decode(offset, text) {
  let resultado=[];
  for (let i=0; i<text.length; i++) {
    if (text[i].charCodeAt()>=65 && text[i].charCodeAt()<=90) {
      resultado += String.fromCharCode(((text[i].charCodeAt()-90-offset)%26)+90);
    }
    else if (text[i].charCodeAt()>=97 && text[i].charCodeAt()<=122) {
      resultado += String.fromCharCode(((text[i].charCodeAt()-122-offset)%26)+122);
    }
    else {
      resultado += text[i]; // esta forma é o ideal, pois segue a logica do if else - se não é maiuscula e nem minuscula sera o que restar.
    }
  }
  return resultado;
}