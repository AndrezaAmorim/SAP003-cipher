window.cipher = {
  encode: encode,
  decode: decode,
};

function encode(offset, text) {
  let result=[];

  for (let i=0; i<text.length; i++) {
    if (text[i].charCodeAt()>=65 && text[i].charCodeAt()<=90) {
      result += String.fromCharCode(((text[i].charCodeAt()-65+offset)%26)+65);
    }
    else if (text[i].charCodeAt()>=97 && text[i].charCodeAt()<=122) {
      result += String.fromCharCode(((text[i].charCodeAt()-97+offset)%26)+97);
    }
    else {
      result += text[i];
    }
  }
  return result;
}

function decode(offset, text) {
  let result=[];
  for (let i=0; i<text.length; i++) {
    if (text[i].charCodeAt()>=65 && text[i].charCodeAt()<=90) {
      result += String.fromCharCode(((text[i].charCodeAt()-90-offset)%26)+90);
    }
    else if (text[i].charCodeAt()>=97 && text[i].charCodeAt()<=122) {
      result += String.fromCharCode(((text[i].charCodeAt()-122-offset)%26)+122);
    }
    else {
      result += text[i];
    }
  }
  return result;
}