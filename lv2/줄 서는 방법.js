// 순열
function solution(n, k) {
  const answer = []
  const arr = Array.from({ length: n }, (_, i) => i + 1)

  let nth = k - 1

  while (arr.length) {
    if (nth === 0) {
      answer.push(...arr)
      break
    }

    const fac = factorial(arr.length - 1)
    const index = Math.floor(nth / fac)
    nth = nth % fac

    answer.push(arr[index])
    arr.splice(index, 1)
  }

  return answer
}

const factorial = (n) => {
  let cnt = 1
  for (let i = 2; i <= n; i++) cnt *= i
  return cnt
}
