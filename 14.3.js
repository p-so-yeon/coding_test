//캐릭터의 좌표
function solution(keyinput, board) {
  var answer = [0, 0];

  for (let i = 0; i < keyinput.length; i++) {
    let direction = keyinput[i];
    if (direction === "left" && -answer[0] < board[0] / 2 - 1) {
      answer[0]--;
    } else if (direction === "right" && answer[0] < board[0] / 2 - 1) {
      answer[0]++;
    } else if (direction === "up" && answer[1] < board[1] / 2 - 1) {
      answer[1]++;
    } else if (direction === "down" && -answer[1] < board[1] / 2 - 1) {
      answer[1]--;
    }
  }

  return answer;
}
