// Problem; Ceating an automatc school grading system.
// Using conditions to assign grades
    // Range 80 - 100 (A), 70 - 79 (B), 60 - 69 (C), 50 - 59 (D), 0 - 49(F).
function calculateGrade(mark) {

// Using conditions to assign grades
    
const gradeBoundaries = [
        { min: 80, grade: "A" },
        { min: 70, grade: "B" },
        { min: 60, grade: "C" },
        { min: 50, grade: "D" },
        { min: 0,  grade: "F" }
    ];

    // Loop through the grade boundaries
    for (let i = 0; i < gradeBoundaries.length; i++) {
        if (mark >= gradeBoundaries[i].min) {
            return gradeBoundaries[i].grade;
        }
    }
}

let studentMarks = [85, 72, 90, 60, 45, 78];

// Loop through all students and display grades
for (let i = 0; i < studentMarks.length; i++) {
    let grade = calculateGrade(studentMarks[i]);
    console.log("Student " + (i+1) + " scored " + studentMarks[i] + " and got grade " + grade);
}

/*
Why;
use conditions; To decide grade catogory based on score.
use a loop; To proccess multiple students's marks automatically.
use a function; To avoid repeating grade logic many times and reuse code.
*/

