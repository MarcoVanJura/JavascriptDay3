let students = [
    ["Martin", 76],
    ["Thomas", 85],
    ["Klaus", 65],
    ["Maria", 93],
    ["David", 81]
];

let sum = 0;
let names = []

for (i = 0; i < students.length; i++) { sum = sum + students[i][1]; } // avgmarks += students[i][1]


console.log(sum)

let average = sum / students.lenght;
console.log(avgmarks)

// average = (avgmarks / students.length)
// console.log("All points from Class = " + avgmarks)
// console.log("Average points from all class = " + average)


if (average <= 60)
    console.log("your grad is F");

else if (average <= 70)
    console.log("your grad is D")

else if (average <= 80)
    console.log("your grad is C")

else if (average <= 90)
    console.log("your grad is B")

else if (average <= 100)
    console.log("your grad is A")


for (let i = 0; i < students; i++) {
    console.log(Student: $ {
            `students[i][0]}, Grade: ${students[i][1]}`);

    }


    // Exercise 2 

    for (i = 1; i <= 100; i++) {
        if (i % 15 == 0) console.log("Fizzbuz")
        else if (i % 5 == 0) console.log("Buzz")
        else if (i % 3 == 0) console.log("Fizz")
        else console.log(i);
    }


    // Exercise 3

    for (i = 1; i <= 6; i++) {
        for (j = 1; j <= i; j++) {
            document.write("*")
        }
        document.write("<br/>")

    }