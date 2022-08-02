// DP
function solution(n, money) {
  const dp = [1, ...new Array(n).fill(0)];

  money.map((coin) => {
    for (let i = coin; i < n + 1; i++) {
      dp[i] += dp[i - coin];
    }
  });

  return dp[n] % 1_000_000_007;
}
