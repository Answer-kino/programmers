// DP 다익스트라[최단경로 탐색]
function solution(N, road, K) {
  const arr = Array(N + 1).fill(Number.MAX_SAFE_INTEGER)
  const lines = Array.from(Array(N + 1), () => [])

  road.map((item) => {
    const [a, b, time] = item
    lines[a].push({ to: b, time })
    lines[b].push({ to: a, time })
  })

  let que = [{ to: 1, time: 0 }]
  arr[1] = 0

  while (que.length) {
    const { to } = que.pop()

    lines[to].map((next) => {
      if (arr[next.to] > arr[to] + next.time) {
        arr[next.to] = arr[to] + next.time
        que.push(next)
      }
    })
  }

  return arr.filter((time) => time <= K).length
}
