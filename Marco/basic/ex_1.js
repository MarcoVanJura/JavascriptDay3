// // exercise 1

// let nums = [1, 7, -3, 9, ];
// let highest = nums[0];

// for (i = 0; i <= highest; i++) {
//     if (highest < nums[i]) {
//         highest = nums[i];
//     }
// }


// console.log(highest);


// exercise 2


let msg1 = document.getElementById("message1")
let msg2 = document.getElementById("message2")
let msg3 = document.getElementById("image")


function temperature() {
    let min = -5;
    let max = 40;
    let random = Math.floor(Math.random() * (max - min) + min);

    if (random <= 10) {
        msg1.textContent = "Temperatue " + random + "°C";
        msg2.textContent = "The weather is cold!"
        msg3 = document.getElementById("image").style.backgroundImage = "url('pictures/cold2.png')";
    } else if (random <= 20) {
        msg1.textContent = "Temperatue " + random + "°C";
        msg2.textContent = "The weather is moderate!"
        msg3 = document.getElementById("image").style.backgroundImage = "url('pictures/moderate2.png')";
    } else if (random <= 25) {
        msg1.textContent = "Temperatue " + random + "°C";
        msg2.textContent = "The weather is warm! ";
        msg3 = document.getElementById("image").style.backgroundImage = "url('pictures/warm.png')";
    } else {
        msg1.textContent = "Temperatue " + random + "°C";
        msg2.textContent = "The weather is hot"
        msg3 = document.getElementById("image").style.backgroundImage = "url('pictures/hot2.png')";
    }
}
console.log(temperature());