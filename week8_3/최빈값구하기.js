function solution(array) {
  var answer = {};

  array.forEach((num) => {
    answer[num] = (answer[num] || 0) + 1;
  });

  let maxFreq = 0;
  let modes = [];

  for (let key in answer) {
    if (answer[key] > maxFreq) {
      maxFreq = answer[key];
      modes = [Number(key)];
    } else if (answer[key] === maxFreq) {
      modes.push(Number(key));
    }
  }

  return modes.length > 1 ? -1 : modes[0];
}
