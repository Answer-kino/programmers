// 정렬
function solution(k, tangerine) {
  var answer = 0
  const tangerineCnt = []

  tangerine.map((size) => {
    tangerineCnt[size - 1] ? (tangerineCnt[size - 1] += 1) : (tangerineCnt[size - 1] = 1)
  })

  tangerineCnt.sort((a, b) => b - a)

  for (let cnt of tangerineCnt) {
    k -= cnt
    answer += 1
    if (k <= 0) break
  }
  return answer
}

solution(6, [1, 3, 2, 5, 4, 5, 2, 3])
