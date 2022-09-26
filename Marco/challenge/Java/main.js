const student = ["John", "Jane", "Mary", "Peter", "David"]
const grades = [70, 85, 60, 99, 100]
var student_name = prompt("Enter your name!")
let msg = document.getElementById("grade-text");

while (student_name === "") { student_name = prompt("Enter your name!"); }

if (!(student_name) || (student)) {
    alert("Wrong Name!")
    student_name = prompt("Please Enter a valid name!");
}

if (student_name != "") {
    name_exist = student.includes(student_name);
    if (name_exist) {
        position = student.indexOf(student_name)
        grade = grades[position]
        setColor(grade)
        msg.textContent = student_name + " has reached " + grades[position] + " points in Math this season.";
    }
}



function setColor(grade) {

    if (grade <= 60) {
        document.getElementById("grade-text").style.color = "red"
    } else if (grade > 60 && grade <= 70) {
        document.getElementById("grade-text").style.color = "yellow"
    } else if (grade > 70 && grade <= 99) {
        document.getElementById("grade-text").style.color = "green"

    } else {
        document.getElementById("grade-text").style.color = "blue"
    }
}