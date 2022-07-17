// 구현
function solution(n, words) {
  const dict = { [words[0]]: true }

  for (let i = 1; i < words.length; i++) {
    const cur = words[i]
    const prev = words[i - 1]

    if (dict[cur] || cur[0] !== prev[prev.length - 1]) {
      answer = [(i % n) + 1, Math.floor(i / n) + 1]
    }
    dict[cur] = true
  }

  return answer
}
