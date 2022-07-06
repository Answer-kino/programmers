// 수학 - 등차수열
// 홀수의 약수의 개수 구하기
function solution(n) {
  let answer = 0
  for (let i = 1; i < n + 1; i += 2) {
    if (n % i === 0) answer += 1
  }
  return answer
}
