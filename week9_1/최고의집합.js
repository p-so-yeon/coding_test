function solution(n, s) {
  if (s < n) return [-1];

  const quot = Math.floor(s / n);
  const remain = s % n;

  const result = Array(n).fill(quot);

  for (let i = 0; i < remain; i++) {
    result[i]++;
  }

  return result.sort((a, b) => a - b);
}
