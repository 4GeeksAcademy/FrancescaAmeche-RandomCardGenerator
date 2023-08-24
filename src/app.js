/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  function randomCardGenerator() {
    let cardSuits = ["♦", "♥", "♠", "♣"];
    let randomSuits = cardSuits[Math.floor(Math.random() * cardSuits.length)];
    document.getElementById("suitTop").textContent = randomSuits;
    document.getElementById("suitBottom").textContent = randomSuits;

    let cardNumber = [
      "A",
      "2",
      "3",
      "4",
      "5",
      "6",
      "7",
      "8",
      "9",
      "10",
      "J",
      "Q",
      "K"
    ];
    document.getElementById("number").textContent =
      cardNumber[Math.floor(Math.random() * cardNumber.length)];
  }
  randomCardGenerator();
  //write your code here
};
