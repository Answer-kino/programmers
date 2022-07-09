// 피보나치 수열
function solution(n) {
  const dp = [1, 1]
  for (let i = 2; i < n; i++) {
    const cnt = dp[i - 1] + dp[i - 2]
    dp[i] = cnt % 1234567
  }
  return dp[n - 1]
}
