// 구현
function solution(rows, columns, queries) {
  let queriesLen = queries.length
  let answer = new Array(queriesLen)
  let matric = new Array(rows).fill(0).map(() => Array(columns).fill(0))

  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < columns; j++) {
      matric[i][j] = i * columns + j + 1
    }
  }

  for (let i = 0; i < queriesLen; i++) {
    answer[i] = rotate(matric, queries[i])
  }
  return answer
}

const rotate = (matric, query) => {
  // 꼭지점 값
  let r1 = query[0] - 1
  let c1 = query[1] - 1
  let r2 = query[2] - 1
  let c2 = query[3] - 1

  let temp = matric[r1][c1]
  let min = temp

  for (let i = r1; i < r2; i++) {
    matric[i][c1] = matric[i + 1][c1]
    if (min > matric[i][c1]) min = matric[i][c1]
  }

  for (let i = c1; i < c2; i++) {
    matric[r2][i] = matric[r2][i + 1]
    if (min > matric[r2][i]) min = matric[r2][i]
  }

  for (let i = r2; i > r1; i--) {
    matric[i][c2] = matric[i - 1][c2]
    if (min > matric[i][c2]) min = matric[i][c2]
  }

  for (let i = c2; i > c1; i--) {
    matric[r1][i] = matric[r1][i - 1]
    if (min > matric[r1][i]) min = matric[r1][i]
  }

  matric[r1][c1 + 1] = temp

  return min
}

console.log(
  solution(6, 6, [
    [2, 2, 5, 4],
    [3, 3, 6, 6],
    [5, 1, 6, 3],
  ])
)
