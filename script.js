// Array of student objects
let students = [
    { id: 1, name: "john", age: "18", marks: 80 },
    { id: 2, name: "jack", age: "20", marks: 85 },
    { id: 3, name: "karen", age: "19", marks: 35 }
];

// Function to console.log all students with marks over 50 using the .map function
function PrintStudentswithMap() {
    const passedStudents = students.filter(student => student.marks > 50);
    const studentNames = passedStudents.map(student => student.name);
    console.log("Students with marks over 50 using .map:", studentNames);
}

// Function to console.log all the students who have marks over 50 using the .forEach function
function PrintStudentsbyForEach() {
    console.log("Students with marks over 50 using .forEach:");
    students.forEach(student => {
        if (student.marks > 50) {
            console.log(student);
        }
    });
}

// Function to add another student object to the array and console.log it
function addData() {
    const newStudent = { id: 4, name: "susan", age: "20", marks: 45 };
    students.push(newStudent);
    console.log("Added student:", newStudent);
}

// Function to remove the student who has failed (marks < 50) and console.log the changed array
function removeFailedStudent() {
    students = students.filter(student => student.marks >= 50);
    console.log("Array after removing failed students:", students);
}

// Function to create another array with 3 student objects similar to the given array but with different ids
function concatenateArray() {
    const newStudents = [
        { id: 5, name: "emma", age: "21", marks: 60 },
        { id: 6, name: "mike", age: "22", marks: 55 },
        { id: 7, name: "lucy", age: "20", marks: 65 }
    ];
    console.log("New array with additional students:", newStudents);
}
