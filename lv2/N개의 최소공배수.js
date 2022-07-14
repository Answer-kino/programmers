// 최소공배수, 유클리드 호제법
// x * y / 최대공약수 = 최소공배수
const getGcd = (a, b) => {
  if (b === 0) return a
  return getGcd(b, a % b)
}

function solution(arr) {
  return arr.reduce((a, b) => (a * b) / getGcd(a, b))
}
