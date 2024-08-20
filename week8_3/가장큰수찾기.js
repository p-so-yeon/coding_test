function solution(array) {
  const maxNumber = Math.max(...array);

  const index = array.indexOf(maxNumber);

  return [maxNumber, index];
}
