// 그리드
function solution(A, B) {
  let answer = 0;
  A.sort((a, b) => a - b);
  B.sort((a, b) => a - b);

  for (let i = A.length - 1; i >= 0; i--) {
    const bMax = B[B.length - 1];
    if (A[i] < bMax) {
      answer += 1;
      B.pop();
    }
  }
  return answer;
}

console.log(solution([5, 1, 3, 7], [2, 2, 6, 8]));
