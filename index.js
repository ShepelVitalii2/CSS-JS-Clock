const secondHand = document.querySelector(".second-hand");
const minutesHand = document.querySelector(".min-hand");
const hoursHand = document.querySelector(".hour-hand");
function setDate() {
  const now = new Date();

  const seconds = now.getSeconds();
  const mins = now.getMinutes();
  const hours = now.getHours();

  const secondsDegree = (seconds / 60) * 360 + 90;
  secondHand.style.transform = `rotate(${secondsDegree}deg )`;

  const minutesDegree = (mins / 60) * 360 + (seconds / 60) * 6 + 90;
  minutesHand.style.transform = `rotate(${minutesDegree}deg )`;

  const hoursDegree = (hours / 12) * 360 + (mins / 60) * 6 + 90;
  hoursHand.style.transform = `rotate(${hoursDegree}deg )`;
}
setInterval(setDate, 1000);
setDate();
