let students = [
    ["Martin", 76],
    ["Thomas", 85],
    ["Klaus", 65],
    ["Maria", 93],
    ["David", 81]
];

let avgmarks = 0;
let names = []
let average = 0;

for (i = 0; i < students.length; i++) { avgmarks += students[i][1] }

average = (avgmarks / students.length)
console.log("All points from Class = " + avgmarks)
console.log("Average points from all class = " + average)


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


// Exercise 2 

for (i = 1; i <= 100; i++) {
    if (i % 15 == 0) console.log("Fizzbuz")
    else if (i % 5 == 0) console.log("Buzz")
    else if (i % 3 == 0) console.log("Fizz")
    else console.log(i);
}


// Exercise 3