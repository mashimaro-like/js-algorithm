function problem3(number) {
  var answer;
  var count = 1;
  var clap = 0;
  var clap_num = [3, 6, 9];

  while (count <= number) {    
    let check = count.toString().split("").map(Number);
    for (let i=0; i < check.length; i++) {
      for (let j=0; j < 3; j++) {
        if (check[i] == clap_num[j]) {
          clap += 1;
        }
      }
    }
    count += 1;
  }

  answer = clap;

  return answer;
}

module.exports = problem3;
