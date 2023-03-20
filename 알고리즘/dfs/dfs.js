function solution(v) {
  let answer;
  function DFS(v) {
    if (v > 7) {
      return;
    }

    DFS(v * 2); // 왼쪽 노드
    console.log(v);
    DFS(v * 2 + 1); // 오른쪽 노드
  }
  DFS(v);
  return answer;
}
// stack 순서
// D(1) => D(2)
// => D(4)
// => D(8) (false pop) => console.log(4); => D(9) (false pop)
// => console.log(2);
// => D(5)
// => D(10) (false pop) => console.log(5); => D(11) (false pop)
// => (D(2) 마무리) console.log(1);
// => D(3)
// => D(6)
// => D(12) (false pop) => console.log(6); => D(13) (false pop)
// => (D(6) 마무리) console.log(3);
// => D(7)
// => D(14) (false pop) => console.log(7); => D(15) (false pop)
