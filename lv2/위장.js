// 조합
function solution(clothes) {
  let clothesMap = new Map()
  clothes.map((el) => {
    if (clothesMap.get(el[1])) clothesMap.set(el[1], clothesMap.get(el[1]) + 1)
    else clothesMap.set(el[1], 1)
  })

  let answer = 0
  for (const value of clothesMap.values()) {
    if (answer === 0) answer = value + 1
    else answer = answer * (value + 1)
  }

  return answer - 1
}
