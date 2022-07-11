function square(x) {
  const square = x * x;
  console.log(`${x}에 대하여 square함수 실행결과 ${square}`);
  return square;
}
square(4);

const alias = square;
alias(4);

function plus(x, y) {
  const plus = x + y;
  console.log(`${x}와 ${y}에 대하여 plus함수 실행결과 ${plus}`);
  return plus;
}
plus(1, 2);

plus(square(4), 1);
plus(alias(4), 1);
