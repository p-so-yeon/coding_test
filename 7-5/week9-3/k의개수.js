function solution(i, j, k) {
  var answer = 0;

  for (let num = i; num <= j; num++) {
    const numStr = num.toString();
    for (let num2 = 0; num2 < numStr.length; num2++) {
      if (numStr[num2] === k.toString()) {
        answer++;
      }
    }
  }
  return answer;
}
