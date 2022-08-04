// 구현
function solution(n, s) {
  const mid = Math.floor(s / n);
  if (!mid) return [-1];

  const rest = s % n;

  const answer = new Array(n).fill(mid);

  for (let i = 0; i < rest; i++) {
    answer[answer.length - 1 - i] += 1;
  }

  return answer;
}
