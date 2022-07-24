// DFS, 백트래킹
function solution(numbers, target) {
  var answer = 0
  const dfs = (numbers, target, nodeDepth, curSum) => {
    if (nodeDepth === numbers.length) {
      if (curSum === target) answer += 1
    } else {
      let plus = curSum + numbers[nodeDepth]
      dfs(numbers, target, nodeDepth + 1, plus)
      let minus = curSum - numbers[nodeDepth]
      dfs(numbers, target, nodeDepth + 1, minus)
    }
  }
  dfs(numbers, target, 0, 0)
  return answer
}

console.log(solution([1, 1, 1, 1, 1], 3))
