window.cipher = {
  encode: encode,
  decode: decode,
};

function encode(offset, text) {
  let result=[];
  
  for (let prop in text) {
    if (text[prop].charCodeAt()>=65 && text[prop].charCodeAt()<=90) {
      result += String.fromCharCode(((text[prop].charCodeAt()-65+offset)%26)+65);
    }
    else if (text[prop].charCodeAt()>=97 && text[prop].charCodeAt()<=122) {
      result += String.fromCharCode(((text[prop].charCodeAt()-97+offset)%26)+97);
    }
    else {
      result += text[prop];
    }
  }
  return result;
}

function decode(offset, text) {
  let result=[];
   
  for (let prop in text) {
    if (text[prop].charCodeAt()>=65 && text[prop].charCodeAt()<=90) {
      result += String.fromCharCode(((text[prop].charCodeAt()-90-offset)%26)+90);
    }
    else if (text[prop].charCodeAt()>=97 && text[prop].charCodeAt()<=122) {
      result += String.fromCharCode(((text[prop].charCodeAt()-122-offset)%26)+122);
    }
    else {
      result += text[prop];
    }
  }
  return result;
}