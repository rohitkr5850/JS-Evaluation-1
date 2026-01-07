const students = [
  { id: 1, name: 'Alice', score: 85, age: 20 },
  { id: 2, name: 'Bob', score: 92, age: 22 },
  { id: 3, name: 'Charlie', score: 68, age: 21 },
  { id: 4, name: 'David', score: 78, age: 23 },
  { id: 5, name: 'Eve', score: 95, age: 20 },
  { id: 6, name: 'Frank', score: 71, age: 22 }
];

function transformStudents(students) {
  return students
  .filter(student => student.score > 70)
  .map(student => {
    let grade = "";

    if(student.score >= 90){
        grade = "A";
    }
    else if(student.score >= 80){
        grade = "B";
    }
    else{
        grade = "C";
    }

    return {
        name : student.name,
        score : student.score,
        grade : grade
    };
  })
  .sort((a , b) => b.score - a.score);
  }

const result = transformStudents(students);
console.log(result);

/* Expected Output:
[
  { name: 'Eve', score: 95, grade: 'A' },
  { name: 'Bob', score: 92, grade: 'A' },
  { name: 'Alice', score: 85, grade: 'B' },
  { name: 'David', score: 78, grade: 'C' },
  { name: 'Frank', score: 71, grade: 'C' }
]
*/
