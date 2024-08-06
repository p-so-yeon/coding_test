function solution(array) {
  var answer = 0;
  let arr = [];
  for (let i = 0; i < array.length; i++) {
    arr.push(array[i].toString());
  }
  console.log(arr);
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      if (arr[i][j] == 7) {
        answer += 1;
      }
    }
  }
  return answer;
}
