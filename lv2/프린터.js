// Queue
function solution(priorities, location) {
  let list = priorities.map((el, index) => ({
    isMe: index === location,
    val: el,
  }))

  let count = 0

  while (true) {
    let firstPage = list.shift()
    if (list.some((el) => el.val > firstPage.val)) {
      list.push(firstPage)
    } else {
      count += 1
      if (firstPage.isMe) return count
    }
  }
}
