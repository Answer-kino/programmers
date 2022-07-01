// 피보나치 수열
function solution(n) {
  const dp = [1, 2]
  for (let i = 2; i < n; i++) {
    const cnt = dp[i - 1] + dp[i - 2]
    dp[i] = cnt % 1000000007
  }
  return dp[n - 1]
}

console.log(solution(10))
