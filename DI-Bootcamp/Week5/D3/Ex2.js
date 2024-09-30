function DisplayStudentInfo({first, last}) {
    return `Your full name is${first} ${last}`;
}

console.log(DisplayStudentInfo({first: 'Elie', last:'Schoppik'}));
// Output: 'Your full name is Elie Schoppik'

