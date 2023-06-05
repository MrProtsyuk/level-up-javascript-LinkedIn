// Write your code here
function getStudents(classroom) {
  var { hasTeachingAssistant, classList } = classroom;
  var teacher, teachingAssistant, students;

  if (hasTeachingAssistant) {
    [teacher, teachingAssistant, ...students] = classList;
  } else {
    [teacher, ...students] = classList;
  }
  return students;
}

console.log(getStudents({
  hasTeachingAssistant: true,
  classList: ["Tom", "John", "Jane", "Kane"]
}));