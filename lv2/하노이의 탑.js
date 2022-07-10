// 재귀 하노이탑
// 1. 입력 받은 n이 1이 될때까지 재귀 함수(n, from, by, to)를 실행한다.
// 2. n이 1보다 크다면 from에서 by로 한블럭을 보낸다.
// 3. 다음 블럭을 from에서 to로 보낸후 배열에 [from, to]를 삽입한다.
// 4. by로 보냈던 블럭을 to로 보낸다.
// 5. n이 1과 같다면 [from, to]으로 바로 보낸후 재귀를 종료한다.
// 6. 얻어진 result를 반환한다.
function solution(n) {
  var answer = []
  const hanoi = (n, from, by, to) => {
    if (n === 1) {
      answer.push([from, to])
    } else {
      hanoi(n - 1, from, to, by)
      answer.push([from, to])
      hanoi(n - 1, by, from, by)
    }
  }
  hanoi(n, 1, 2, 3)
  return answer
}

console.log(solution(2))
