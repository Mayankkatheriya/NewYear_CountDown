let daysLeft = document.querySelector("#days");
let hoursLeft = document.querySelector("#hours");
let minutesLeft = document.querySelector("#minutes");
let secondsLeft = document.querySelector("#seconds");

let newYearDate = new Date("Jan 1, 2024 00:00:00").getTime();
function update() {
  let todayDate = new Date().getTime();

  if (todayDate == new Date("Jan 1, 2024 00:00:00")) {
    clearInterval(countDown);
  }
  let timeLeft = newYearDate - todayDate;

  let oneSecond = 1000;
  let oneminute = oneSecond * 60;
  let onehour = oneminute * 60;
  let oneday = onehour * 24;

  let remDays = String(Math.floor(timeLeft / oneday)).padStart("2", "0");

  let remHours = String(Math.floor((timeLeft % oneday) / onehour)).padStart(
    "2",
    "0"
  );

  let remMinutes = String(
    Math.floor((timeLeft % onehour) / oneminute)
  ).padStart("2", "0");

  let remSeconds = String(
    Math.floor((timeLeft % oneminute) / oneSecond)
  ).padStart("2", "0");

  daysLeft.innerText = remDays;
  hoursLeft.innerText = remHours;
  minutesLeft.innerText = remMinutes;
  secondsLeft.innerText = remSeconds;
}
let countDown = setInterval(update, 1000);
