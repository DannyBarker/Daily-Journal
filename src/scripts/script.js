var stepOne = document.querySelector(".article__header");
console.log('stepOne', stepOne);
stepOne.textContent = "Welcome to the Danny blog";

var stepTwo = document.querySelectorAll(".article__header");
console.log('stepTwo', stepTwo);
stepTwo[0].classList.add('important');
stepTwo[1].classList.add('important');

var stepThree = document.querySelector(".dashed");
console.log('stepThree', stepThree);
stepThree.classList.remove("dashed");

var stepFour = document.querySelector(".article__footer");
console.log('stepFour', stepFour);
stepFour.classList.add("goldenrod");


