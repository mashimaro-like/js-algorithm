function problem7(user, friends, visitors) {
  var answer = [];

  // 친구 이름 찾기
  var user_friends = friends
  .filter(([x, y]) => ( user == x || user == y ))
  .map(([x, y]) => (x === user ? y : x));

  // 친구의 친구 찾기
  var fri_friends = [];
  friends.forEach(find_fri => {
    for (let i=0; i < user_friends.length; i++) {
      if (find_fri.includes(user_friends[i]) && !find_fri.includes(user) ) {
        fri_friends.push(find_fri[0] !== user_friends[i] ? find_fri[0] : find_fri[1]);
      }
    }
  });

  // 친구의 친구 점수
  var count_fri_friends = new Map(); 
  fri_friends.forEach(x => {
    let count = fri_friends.filter(check => check === x && !user_friends.includes(x))
    .length;
    if (!count_fri_friends.has(x)) {
      count_fri_friends.set(x, count*10);
    }
  });

  // 방문자 점수
  var count_visit = new Map();
  visitors.forEach(x => {
    let count = visitors.filter(check => check === x && !user_friends.includes(x))
    .length;
    if (!count_visit.has(x)) {
      count_visit.set(x, count);
    }
  })

  // 총합
  for (let [key, value] of count_visit) {
    if (!user_friends.includes(key)){
      if (count_fri_friends.has(key)) {
        count_fri_friends.set(key, count_fri_friends.get(key) + value);
      }else {
        count_fri_friends.set(key, value);
      } 
    }
  }

  // 정렬
  var sorted = [...count_fri_friends.entries()].sort((x, y) => {
    if (x[1] === y[1]) {
      return x[0].localeCompare(y[0]);
    }
    else return y[1] - x[1];
  })

  // 마지막으로 친구의 친구 map과 방문자 카운트 합치기

  for (let [key, value] of sorted) {
    answer.push(key);
  }

  answer = answer.slice(0,5);

  return answer;
}

module.exports = problem7;
