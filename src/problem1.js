function problem1(pobi, crong) {
  var answer;
  
	var [pobi_max, crong_max] = [pobi, crong].map(pages => {
		if (pages[0] + 1 == pages[1]) {
			let check = pages.map(page => {
				let num = page.toString().split("").map(Number);
				let add = 0;
				let gob = 1;

				for (let i=0; i < num.length; i++){
					add += num[i];
					gob *= num[i];
				}

				return Math.max(add, gob);
			})
			
			return Math.max(...check)
		}
		else return -1;
	})

	if (pobi_max == -1 || crong_max == -1) {
		answer = -1;
	}
	else if(pobi_max > crong_max) {
		answer = 1;
	}
	else if (pobi_max < crong_max) {
		answer = 2;
	}
	else answer = 0;

  return answer;
}

module.exports = problem1;