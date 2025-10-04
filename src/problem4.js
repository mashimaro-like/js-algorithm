function problem4(word) {
  var answer = "";

  var frog_word = new Map([
    ["a", "z"], ["b", "y"], ["c", "x"], ["d", "w"], ["e", "v"],
    ["f", "u"], ["g", "t"], ["h", "s"], ["i", "r"], ["j", "q"],
    ["k", "p"], ["l", "o"], ["m", "n"], ["n", "m"], ["o", "l"],
    ["p", "k"], ["q", "j"], ["r", "i"], ["s", "h"], ["t", "g"],
    ["u", "f"], ["v", "e"], ["w", "d"], ["x", "c"], ["y", "b"], 
    ["z", "a"]  
  ])

  for ( let i=0; i < word.length; i++) {
    let change = word[i].toLowerCase();
    

    if (frog_word.has(change)) {
      if (word[i] !== word[i].toLowerCase()) {
        let ToBig = frog_word.get(change);
        answer += ToBig.toUpperCase();
      }
      else answer += frog_word.get(change);
    }
    else answer += " ";
  }

  return answer;
}

module.exports = problem4;
