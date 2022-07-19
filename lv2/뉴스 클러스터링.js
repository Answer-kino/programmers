// 구현 [합집합, 교집합]
const enRegx = /[A-Za-z]{2}/

function solution(str1, str2) {
  const arr1 = exploade(str1)
  const arr2 = exploade(str2)

  const set = new Set([...arr1, ...arr2])
  let union = 0
  let intersection = 0

  set.forEach((item) => {
    const has1 = arr1.filter((x) => x === item).length
    const has2 = arr2.filter((x) => x === item).length
    union += Math.max(has1, has2)
    intersection += Math.min(has1, has2)
  })

  return union === 0 ? 65536 : Math.floor((intersection / union) * 65536)
}

const exploade = (text) => {
  const result = []

  for (let i = 0; i < text.length; i++) {
    const node = text.substr(i, 2)
    if (node.match(enRegx)) {
      result.push(node.toLowerCase())
    }
  }

  return result
}
