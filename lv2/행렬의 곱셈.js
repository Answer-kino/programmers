// 행렬의 곱셈
function solution(arr1, arr2) {
  var answer = []
  const aRowLen = arr1.length
  const bColLen = arr2[0].length
  const bRowLen = arr2.length

  for (let i = 0; i < aRowLen; i++) {
    let row = []
    for (let j = 0; j < bColLen; j++) {
      let x = 0
      for (let k = 0; k < bRowLen; k++) {
        x += arr1[i][k] * arr2[k][j]
      }
      row.push(x)
    }
    answer.push(row)
  }
  return answer
}
