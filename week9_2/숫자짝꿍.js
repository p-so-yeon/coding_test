function solution(X, Y) {
  let countX = new Array(10).fill(0);
  let countY = new Array(10).fill(0);

  for (let i = 0; i < X.length; i++) {
    countX[X[i]]++;
  }

  for (let i = 0; i < Y.length; i++) {
    countY[Y[i]]++;
  }

  let result = [];

  for (let i = 9; i >= 0; i--) {
    let commonCount = Math.min(countX[i], countY[i]);
    for (let j = 0; j < commonCount; j++) {
      result.push(i);
    }
  }

  if (result.length === 0) return "-1";

  if (result[0] === 0) return "0";

  return result.join("");
}
