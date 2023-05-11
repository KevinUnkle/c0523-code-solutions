/* exported getStudentNames */
function getStudentNames(students) {
  const array1 = [];
  for (let i = 0; i < students.length; i++) {
    array1.push(students[i].name);
  }
  return array1;
}
