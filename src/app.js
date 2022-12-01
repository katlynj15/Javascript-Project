/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";
let who = ["My client", "My customer", "That lady", "Her friend"];
let action = ["damaged", "cracked", "split", "broke"];
let what = ["her nail", "her finger", "her toe"];
let when = [
  "before the vacation",
  "right after the appointment ",
  "when I finished",
  "satuday while partying",
  "while she was exercising "
];
window.onload = function() {
  //write your code here
  console.log("Hello World!");
};
document.querySelector("#more").addEventListener("click", () => {
  document.querySelector("#excuse").innerHTML = newExcuse();
});

function newExcuse() {
  let who = ["My client", "My customer", "That lady", "Her friend"];
  let action = ["damaged", "cracked", "split", "broke"];
  let what = ["her nail", "her finger", "her toe"];
  let when = [
    "before the vacation",
    "right after the appointment ",
    "when I finished",
    "satuday while partying",
    "while she was exercising "
  ];
  let whoN = Math.floor(Math.random() * 4);
  let actionN = Math.floor(Math.random() * 4);
  let whatN = Math.floor(Math.random() * 3);
  let whenN = Math.floor(Math.random() * 5);

  return (
    who[whoN] + " " + action[actionN] + " " + what[whatN] + " " + when[whenN]
  );
}
