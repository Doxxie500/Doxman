var clockEl = document.getElementById('ms-clock');

function updateTime() {
  var now = Date.now();
  clockEl.textContent = now;
  clockEl.setAttribute('datetime', new Date(now).toISOString());
}

updateTime();
setInterval(updateTime, 1000);