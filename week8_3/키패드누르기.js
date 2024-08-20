function solution(numbers, hand) {
  const keyPad = {
    1: [0, 0],
    2: [0, 1],
    3: [0, 2],
    4: [1, 0],
    5: [1, 1],
    6: [1, 2],
    7: [2, 0],
    8: [2, 1],
    9: [2, 2],
    "*": [3, 0],
    0: [3, 1],
    "#": [3, 2],
  };

  let leftThumb = keyPad["*"];
  let rightThumb = keyPad["#"];
  let result = "";

  const calculateDistance = (start, target) => {
    return Math.abs(start[0] - target[0]) + Math.abs(start[1] - target[1]);
  };

  numbers.forEach((num) => {
    const target = keyPad[num];

    if (num === 1 || num === 4 || num === 7) {
      result += "L";
      leftThumb = target;
    } else if (num === 3 || num === 6 || num === 9) {
      result += "R";
      rightThumb = target;
    } else {
      const left = calculateDistance(leftThumb, target);
      const right = calculateDistance(rightThumb, target);

      if (left < right) {
        result += "L";
        leftThumb = target;
      } else if (right < left) {
        result += "R";
        rightThumb = target;
      } else {
        if (hand === "left") {
          result += "L";
          leftThumb = target;
        } else {
          result += "R";
          rightThumb = target;
        }
      }
    }
  });

  return result;
}
