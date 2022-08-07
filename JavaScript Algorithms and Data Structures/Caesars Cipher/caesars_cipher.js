function rot13(str) {
    const regex = /[A-Z]/
    let decoded = "";
  
    for (let i = 0; i < str.length; i++) {
      if (regex.test(str[i])) {
        let charCode = str[i].charCodeAt(0);
        if (charCode >= 78) {
          decoded += String.fromCharCode(charCode - 13);
        } else {
          decoded += String.fromCharCode(charCode + 13);
        }
      } else {
        decoded += str[i];
      }
    }
    return decoded;
  }