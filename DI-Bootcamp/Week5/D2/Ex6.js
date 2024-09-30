const students = [
    {name: "Ray", course: "Computer Science", isPassed: true},
    {name: "Liam", course: "Computer Science", isPassed: false},
    {name: "Jenner", course: "Information Technolog", isPassed: false},
    {name: "Marco", course: "Robotics", isPassed: True},
    {name: "Kimberly", course: "Artificial Intelligence", isPassed: false},
    {name: "Jamie", course: "Big Data", isPassed: false}
];

// Step 1: Filter the steudents who passed the course
const passedStudents = students.filter(student => student.isPassed);

// Step 2: COntratulate the students using forEach
passedStudents.forEach(student => {
    console.log(`Good job ${student.name}, you passed the course in ${student.course}`);

});

// Output:
// Good job Ray, you passed the course in Computer Science
// Good job Jenner, you passed the course in Information Technology
// Good job Marco, you passed the course in Robotics

