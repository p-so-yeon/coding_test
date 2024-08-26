function solution(keymap, targets) {
  const min = {};
  for (const keys of keymap) {
    for (let i = 0; i < keys.length; i++) {
      const char = keys[i];

      if (min[char]) {
        min[char] = Math.min(min[char], i + 1);
      } else {
        min[char] = i + 1;
      }
    }
  }

  const result = [];

  for (const target of targets) {
    let total = 0;
    let canType = true;

    for (const char of target) {
      if (min[char]) {
        total += min[char];
      } else {
        canType = false;
        break;
      }
    }

    if (canType) {
      result.push(total);
    } else {
      result.push(-1);
    }
  }

  return result;
}
