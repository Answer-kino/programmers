// Stack
Array.prototype.peek = function () {
  return this.length > 0 ? this[this.length - 1] : undefined
}
function solution(s) {
  let stack = []

  for (let i = 0; i < s.length; i++) {
    if (!stack.length || stack.peek() !== s[i]) stack.push(s[i])
    else stack.pop()
  }

  return stack.length ? 0 : 1
}
