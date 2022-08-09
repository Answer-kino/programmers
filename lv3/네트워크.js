// DFS
function solution(n, computers) {
  let answer = 0;
  let visited = new Array(n).fill(false);

  const dfs = (computers, node, n) => {
    visited[node] = true;

    for (let i = 0; i < n; i++) {
      if (computers[node][i] == 1) {
        computers[node][i] += 1;
        dfs(computers, i, n);
      }
    }
  };

  for (let i = 0; i < n; i++) {
    if (!visited[i]) {
      answer += 1;
      dfs(computers, i, n);
    }
  }

  return answer;
}

console.log(
  solution(3, [
    [1, 1, 0],
    [1, 1, 0],
    [0, 0, 1],
  ])
);
