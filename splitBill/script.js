"use strict";

const totalPeople = document.querySelector(".people");
const totalBill = document.querySelector(".bill");
const tip = document.querySelector(".tip");
const btnSplit = document.querySelector(".btnSplit");
const splitAmountDisplay = document.querySelector(".splitAmount");
const inputValues = document.querySelectorAll(".inputValues");

const splitBill = function (people, bill, tip = 0) {
  try {
    inputValues.forEach((i) => {
      if (i.value < 0) {
        throw new Error("Invalid input values");
      }
    });
    tip /= 100;
    const splitAmount = ((bill * tip + bill) / people).toFixed(2);
    splitAmountDisplay.textContent = splitAmount;
    inputValues.forEach((i) => (i.value = ""));
  } catch (error) {
    splitAmountDisplay.style.color = "red";
    splitAmountDisplay.textContent = error.message;
  }
};

btnSplit.addEventListener("click", function (e) {
  e.preventDefault();
  splitBill(+totalPeople.value, +totalBill.value, +tip.value);
});
