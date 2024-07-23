function solution(progresses, speeds) {
  let answer = [];
  let days = progresses.map((progress, index) => {
    let remain = 100 - progress;
    let dayCount = remain / speeds[index];
    return remain % speeds[index] === 0 ? dayCount : Math.floor(dayCount) + 1;
  });

  let maxDay = days[0];
  let count = 1;

  for (let i = 1; i < days.length; i++) {
    if (days[i] <= maxDay) {
      count++;
    } else {
      answer.push(count);
      count = 1;
      maxDay = days[i];
    }
  }

  answer.push(count);
  return answer;
}
