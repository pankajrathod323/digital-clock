const hourEl = document.getElementById("hour");
const minuteEl = document.getElementById("minutes");
const secondEl = document.getElementById("seconds");
const ampmEl = document.getElementById("ampm");

function updateClock() {
  const now = new Date();

  let hours = now.getHours();
  const minutes = now.getMinutes();
  const seconds = now.getSeconds();

  const ampm = hours >= 12 ? "PM" : "AM";

  // Convert to 12-hour format
  hours = hours % 12 || 12;

  hourEl.innerText = String(hours).padStart(2, "0");
  minuteEl.innerText = String(minutes).padStart(2, "0");
  secondEl.innerText = String(seconds).padStart(2, "0");
  ampmEl.innerText = ampm;
}

// Run immediately, then every second
updateClock();
setInterval(updateClock, 1000);
