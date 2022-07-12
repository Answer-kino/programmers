// 문자열
function solution(s) {
  var answer = ""
  const str = s.toLowerCase().split("")
  let isFirst = true

  for (let char of str) {
    answer += isFirst ? char.toUpperCase() : char
    isFirst = char === " " ? true : false
  }

  return answer
}
