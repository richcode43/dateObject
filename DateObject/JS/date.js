//Question 1
//Create a JavaScript application that will take date input from user and display how old they are 

birthYear = prompt("PLEASE ENTER YOUR YEAR OF BIRTH");
let currDate = new Date();
let currYear = currDate.getFullYear();
let curAge = (currYear - birthYear);
// console.log(curAge);
document.querySelector(".info").innerText += " " + curAge + " YEARS";
document.querySelector(".info").style.fontWeight = "bold";



//Question 2
presentDate = new Date();
exitDate = new Date("june 12 2023 12:30:00");

let diff = (exitDate - presentDate);
let years = Math.floor(diff / (1000 * 60 * 60 * 24 * 365)); //get difference in years
let months = Math.floor(diff / (1000 * 60 * 60 * 24 * 30)); //get difference in months
let days = Math.floor(diff / (1000 * 60 * 60 * 24)); //get difference in days
let hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / 1000 * 60); //get difference in hours
let minutes = Math.floor(diff % (1000 * 60 * 60) / 1000 * 60); //get difference in minutes
let seconds = Math.floor(diff % (1000 * 60) / 1000); //get difference in seconds
// console.log(years);

if (exitDate === presentDate) {
    document.querySelector(".tenure").innerText = "Buhari's term is ending today being" + exitDate;
} else {
    document.querySelector(".tenure").innerText = "Buhari's term in office will end in exactly" + " " + years + "Year(s)," +
        " " + months + "months," + " " + days + "days," + " " + hours + " hours" +
        " " + minutes + "minutes" + " " + seconds + "seconds.";

}
//Question 3
// 3) create online payment that pair different users.Your job is to create a script that will set
// the time limit at what point when the person is ask to make the payment, and the time the privilege
// is to elapsed
// i.e 48 hours is given to make the payment.If the user fail to make the payment before 48 hours.
// Display an error message that user has been blocked and the order has been forwarded to another user

// startPay = new Date("September 13 2021 11:30:50");

// // EndPay = new Date("September 14 2021 04:30:00");

// let countDown = setTimeout(function() {
//     //get current time
//     let currDate = new Date().getTime();
//     let diff = startPay - currDate;

//     //get remaining day
//     let days = Math.floor(diff / (1000 * 60 * 60 * 24));
//     // let hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / 1000 * 60);
//     let hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
//     // let minutes = Math.floor(diff % (1000 * 60 * 60) / 1000 * 60);
//     let minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
//     // let seconds = Math.floor(diff % (1000 * 60) / 1000);
//     let seconds = Math.floor((diff % (1000 * 60)) / 1000);
//     console.log(days);
//     document.getElementById("msg").innerText = `${days} days ${hours} hours ${minutes} minutes ${seconds} seconds`;
//     if (diff < 0) {
//         clearTimeout(countDown);
//         alert("time has expired");
//     }
// }, 1000);