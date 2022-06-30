/**
 * 3진법을 이용한 풀이
 * @param {*} n 자연수
 * @returns
 */

function solution(n) {
  // 주어진 수를 3으로 나눈 나머지가 0일때는 4, 1,2일때는 2로 대체됨
  const num = [4, 1, 2]
  var answer = ""

  while (n) {
    console.log(num[n % 3])
    answer = num[n % 3] + answer
    n = n % 3 == 0 ? n / 3 - 1 : Math.floor(n / 3)
  }
  return answer
}
