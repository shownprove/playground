/* const grade = "C";

function amIGradeA() {
  const grade = "A";
  function yourGradeIs() {
    if (grade === "A") {
      console.log(`Am I Grade A? : Yes`);
    } else {
      console.log(`Am I Grade A? : No`);
    }
  }
  return yourGradeIs();
}

amIGradeA(); */

const grade = "C";

function amIGradeA() {
  const grade = "A";
  return yourGradeIs();
}

function yourGradeIs() {
  if (grade === "A") {
    console.log(`Am I Grade A? : Yes`);
  } else {
    console.log(`Am I Grade A? : No`);
  }
}
amIGradeA();
