function solution(s, skip, index) {
  const skipSet = new Set(skip);
  const aCode = "a".charCodeAt(0);
  const zCode = "z".charCodeAt(0);

  let answer = [];

  for (let char of s) {
    let charCode = char.charCodeAt(0);
    let shiftCount = 0;

    while (shiftCount < index) {
      charCode++;
      if (charCode > zCode) {
        charCode = aCode;
      }
      if (!skipSet.has(String.fromCharCode(charCode))) {
        shiftCount++;
      }
    }

    answer.push(String.fromCharCode(charCode));
  }

  return answer.join("");
}
