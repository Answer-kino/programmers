// DFS, 백트래킹
function solution(n) {
  let answer = 0

  const visited = new Array(n).fill(false)
  const checker = (depths, board) => {
    for (let i = 0; i < board.length; i++) {
      const [x, y] = [i, board[i]]
      const [dx, dy] = [board.length, depths]

      // 대각 왼쪽
      if (dx - x === dy - y) return false
      // 대각 오른쪽
      if (dx - x === y - dy) return false
    }

    return true
  }
  const dfs = (board = []) => {
    if (board.length === n) {
      answer += 1
      return
    }

    for (let i = 0; i < n; i++) {
      if (visited[i]) continue
      if (!checker(i, board)) continue
      visited[i] = true
      board.push(i)
      dfs(board)
      visited[i] = false
      board.pop()
    }
  }

  dfs()
  return answer
}
