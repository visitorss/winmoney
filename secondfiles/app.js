let myArray = [20, 25, 30, 50, 60, 70, 90, 100];
let winNumber = document.querySelector(".win-number");
let winBtn = document.querySelector(".win-btn");
let withdrawBtn = document.querySelector(".btn-withdraw");
let grid = document.querySelector(".grid");
let animatedNumb = document.querySelector(".animatednumb");
let myBalance = document.querySelector(".balance");
let testNumb = randomNumber(myArray);
let secondNumb = testNumb;
let guestNameValue = document.querySelector(".guestnamevalue");
let guestnam = guestNameValue;

winBtn.addEventListener("click", () => {
  winNumber.classList.remove("primary-loader");
  winNumber.classList.add("loader");
  animatedNumb.classList.add("hidden");
  setTimeout(() => {
    winNumber.classList.remove("loader");
    animatedNumb.classList.remove("hidden");
    animatedNumb.innerHTML = `${guestnam.value}, გილოცავთ თქვენ მოიგეთ ${secondNumb} ₾`;
    winBtn.classList.add("hidden");
    withdrawBtn.classList.remove("hidden");
  }, "2100");
});

withdrawBtn.addEventListener("click", () => {
  myBalance.innerHTML = `${guestnam.value}, თქვენი ბალანსია ${secondNumb}₾`;
  console.log("clicked!!!");
  grid.classList.remove("hidden");
});

function randomNumber(myArray) {
  return myArray[Math.floor(Math.random() * myArray.length)];
}
