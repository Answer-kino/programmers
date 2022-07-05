// DP 메모이제이션
function solution(n) {
  const dp = [1, 2]
  for (let i = 2; i < n; i++) {
    const cnt = dp[i - 1] + dp[i - 2]
    dp[i] = cnt % 1234567
  }
  return dp[n - 1]
}
