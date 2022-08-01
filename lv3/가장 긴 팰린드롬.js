// DP
function solution(s) {
  var answer = 1;
  const sLen = s.length;
  const dp = new Array(sLen).fill().map(() => new Array(sLen).fill(false));

  for (let i = 0; i < sLen; i++) {
    dp[i][i] = true;
  }

  for (let i = 0; i < sLen - 1; i++) {
    if (s[i] === s[i + 1]) {
      answer = 2;
      dp[i][i + 1] = true;
    }
  }

  for (let i = 3; i <= sLen; i++) {
    for (let start = 0; start <= sLen - i; start++) {
      const end = start + i - 1;
      if (s[start] === s[end] && dp[start + 1][end - 1]) {
        dp[start][end] = true;
        answer = Math.max(answer, i);
      }
    }
  }

  return answer;
}
