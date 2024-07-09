//같은 숫자는 싫어
function solution(arr) {
  var answer = [];
  let ans = [];
  for (let i = arr.length - 1; i >= 0; i--) {
    if (arr[i] == arr[i - 1]) {
      arr.pop();
    } else {
      ans.push(arr[i]);
    }
  }
  for (let j = ans.length - 1; j >= 0; j--) {
    answer.push(ans[j]);
  }

  return answer;
}
