//N으로 표현

function solution(N, number) {
  var answer = -1;

  const dp = [];
  for (let i = 0; i < 9; i++) {
    dp.push(new Set());
  }

  for (let i = 1; i < 9; i++) {
    dp[i].add(parseInt(`${N}`.repeat(i), 10));
  }

  for (let i = 1; i < 9; i++) {
    for (let j = 1; j < i; j++) {
      for (let num1 of dp[j]) {
        for (let num2 of dp[i - j]) {
          dp[i].add(num1 + num2);
          dp[i].add(num1 - num2);
          dp[i].add(num1 * num2);
          if (num2 !== 0) {
            dp[i].add(Math.floor(num1 / num2));
          }
        }
      }
    }
    if (dp[i].has(number)) {
      answer = i;
      break;
    }
  }

  return answer;
}
