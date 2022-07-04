// DP 메모이제이션
function solution(land) {
  var answer = 0
  let dp = new Array(land.length).fill(0).map(() => Array(land[0].length).fill(0))
  let landLen = land.length
  for (let i = 0; i < 4; i++) {
    dp[0][i] = land[0][i]
  }

  for (let i = 0; i < landLen; i++) {
    for (let j = 0; j < 4; j++) {
      for (let k = 0; k < 4; k++) {
        if (j !== k) {
          dp[i][j] = Math.max(dp[i][j], land[i][j] + dp[i - 1][k])
        }
      }
    }
  }

  for (let i = 0; i < 4; i++) {
    answer = Math.max(answer, dp[landLen - 1][i])
  }

  return answer
}
