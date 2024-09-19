function solution(before, after) {
  let beforesort = before.split("").sort().join("");
  let aftersort = after.split("").sort().join("");

  return beforesort === aftersort ? 1 : 0;
}
