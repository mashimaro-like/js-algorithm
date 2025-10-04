function compare_make(name) {
  let result = [];

  for (let i=0; i < name.length - 1; i++) {
    for (let j=2; j <= name.length; j++) {
      result.push(name.slice(i, i+j));
    }
  }

  return result;
}

function problem6(forms) {
  var answer = [];
  var data = new Map(forms);
  var back = [];
  var check = false;

  for ( let [email, nick] of data ) {
    let compare = compare_make(nick);
    for (let i=0; i < compare.length; i++) {
      for (let [email_compare, nick_compare] of data) {
        if (email_compare != email && nick_compare.includes(compare[i])) {
          check = true;
        } 
      }
    }
    if (check) {
      back.push(email);
    }
    check = false;
  }

  answer = back.sort();

  return answer;
}

module.exports = problem6;
