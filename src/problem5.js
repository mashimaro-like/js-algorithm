function problem5(money) {
  var answer = [];
  var won = [50000, 10000, 5000, 1000, 500, 100, 50, 10, 1];
  var cash;
  answer = won.map(div => {
    cash = Math.floor(money / div);
    money = money % div;
    return cash
  })
  return answer;
}

module.exports = problem5;
