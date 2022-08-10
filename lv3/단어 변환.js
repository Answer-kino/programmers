// BFS
function solution(begin, target, words) {
  let visited = { [begin]: 0 };
  const queue = [];

  queue.push(begin);
  visited[begin] = 0;

  while (queue.length) {
    const cur = queue.shift();
    if (cur === target) break;

    for (const word of words) {
      let cnt = 0;
      for (let i = 0; i < word.length; i++) {
        if (word[i] !== cur[i]) cnt += 1;
      }

      if (cnt === 1 && !visited[word]) {
        visited[word] = visited[cur] + 1;
        queue.push(word);
      }
    }
  }

  return visited[target] ? visited[target] : 0;
}

console.log(solution("hit", "cog", ["hot", "dot", "dog", "lot", "log", "cog"]));
