/**
 * Greed is a dice game played with five six-sided dice.
Your mission, should you choose to accept it, is to score a throw according to these rules.
You will always be given an array with five six-sided dice values. 
Three 1's => 1000 points
Three 6's =>  600 points
Three 5's =>  500 points
Three 4's =>  400 points
Three 3's =>  300 points
Three 2's =>  200 points
One   1   =>  100 points
One   5   =>   50 point 
 */

function score(dice) {
  var sum = 0;
  dice = dice.sort();

  for (var i = 0; i < dice.length; i++) {
    if (dice[i] == dice[i + 1] && dice[i + 1] == dice[i + 2]) {
      switch (dice[i]) {
        case 1:
          sum += 1000;
          break;
        case 6:
          sum += 600;
          break;
        case 5:
          sum += 500;
          break;
        case 4:
          sum += 400;
          break;
        case 3:
          sum += 300;
          break;
        case 2:
          sum += 200;
          break;
      }
      i = i + 2;
    } else if (dice[i] === 1) {
      sum += 100;
    } else if (dice[i] === 5) {
      sum += 50;
    }
  }
  return sum;
}

score([2, 4, 4, 5, 4]);
