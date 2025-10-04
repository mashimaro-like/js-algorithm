function problem2(cryptogram) {
  var answer;

  let i = 0;
  do {
    var check = cryptogram;
    if (cryptogram[i] == cryptogram[i+1]) {
      cryptogram = cryptogram.replace(cryptogram[i] + cryptogram[i+1], "");
      i = 0;
    }
    else i++;
  } while(i != cryptogram.length)

  answer = cryptogram;

  return answer;
}

module.exports = problem2;
