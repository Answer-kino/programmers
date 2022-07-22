// Stack
function solution(progresses, speeds) {
  let stack = []
  for (let i = 0; i < progresses.length; i++) {
    let day = -1
    while (progresses[i] + speeds[i] * day < 100) {
      day++
    }
    stack.push(day)
  }

  let count = 0,
    stackDump = stack[0],
    result = []
  while (stack.length !== 0) {
    if (stackDump < stack[0]) {
      stackDump = stack[0]
      result.push(count)
      count = 0
    } else {
      stack.shift()
      count += 1
    }
  }
  result.push(count)
  return result
}
