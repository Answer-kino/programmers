// Trie
class makeTrie {
  constructor() {
    this.root = {}
  }

  insert(words) {
    for (const word of words) {
      let current = this.root
      for (const letter of word) {
        if (!current[letter]) {
          current[letter] = [0, {}]
        }
        current[letter][0] = 1 + current[letter][0]
        current = current[letter][1]
      }
    }
  }
}

function solution(words) {
  let answer = 0
  const trie = new makeTrie()
  trie.insert(words)

  for (const word of words) {
    let count = 0
    let current = trie.root

    for (const letter of word) {
      count += 1
      if (current[letter][0] <= 1) {
        break
      }

      current = current[letter][1]
    }

    answer += count
  }

  return answer
}
