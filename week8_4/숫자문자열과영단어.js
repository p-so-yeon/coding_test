function solution(s) {
  var answer = s;
  var eng = [
    "zero",
    "one",
    "two",
    "three",
    "four",
    "five",
    "six",
    "seven",
    "eight",
    "nine",
  ];
  var num = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

  for (let i = 0; i < eng.length; i++) {
    answer = answer.split(eng[i]).join(num[i]);
  }

  return Number(answer);
}
