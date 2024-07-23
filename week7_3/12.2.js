function solution(n, lost, reserve) {
  let actualReserve = reserve.filter((r) => !lost.includes(r));
  let actualLost = lost.filter((l) => !reserve.includes(l));

  let answer = n - actualLost.length;

  actualLost.sort((a, b) => a - b);
  actualReserve.sort((a, b) => a - b);

  for (let i = 0; i < actualLost.length; i++) {
    let lostStudent = actualLost[i];
    for (let j = 0; j < actualReserve.length; j++) {
      let reserveStudent = actualReserve[j];
      if (
        reserveStudent === lostStudent - 1 ||
        reserveStudent === lostStudent + 1
      ) {
        actualReserve.splice(j, 1);
        answer++;
        break;
      }
    }
  }

  return answer;
}
