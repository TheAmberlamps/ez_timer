let state = 0;

document.addEventListener("click", function (event) {
  // If the clicked element doesn't have the right selector, bail
  if (!event.target.matches("#click-me")) return;

  // Don't let button trigger default action
  event.preventDefault();

  // get name and date from form
  var eN = document.getElementById("evNam");
  var n = eN.value;
  var eD = document.getElementById("evDat");
  var futDate = eD.value;
  var counter = document.getElementById("counter");
  var name = document.getElementById("name");

  if (state === 1) {
    let conf = window.confirm(
      "Do you want to cancel the existing timer and start this one?"
    );
    if (conf === false) {
      return;
    } else {
      console.log("resetting timer");
      window.clearInterval(cd);
      name.innerHTML = "";
      counter.innerHTML = "";
    }
  }

  // establish current time
  var currDate = new Date();

  // parse dates into milliseconds
  var setDate = Date.parse(futDate);
  var currMil = Date.parse(currDate);

  // find difference between dates in milliseconds
  var diff = setDate - currMil;

  if (diff < 0) {
    alert("Timers cannot be set in the past.");
    return;
  }

  if (n === "") {
    alert("Please enter a timer name.");
  } else if (isNaN(diff) === true) {
    alert("Please enter a date, time, and AM/PM.");
  } else {
    state = 1;
    cd = window.setInterval(formatter, 1000);

    function formatter() {
      diff -= 1000;
      var seconds = Math.floor((diff / 1000) % 60),
        minutes = Math.floor((diff / (1000 * 60)) % 60),
        hours = Math.floor((diff / (1000 * 60 * 60)) % 24),
        days = Math.floor(diff / (1000 * 60 * 60 * 24));

      hours = hours < 10 ? "0" + hours : hours;
      minutes = minutes < 10 ? "0" + minutes : minutes;
      seconds = seconds < 10 ? "0" + seconds : seconds;

      var placeholder = "";

      if (days > 1) {
        placeholder = " days, ";
      } else if (days === 1) {
        placeholder = " day, ";
      } else {
        placeholder = "";
        days = "";
      }

      let formatted =
        days +
        placeholder +
        hours +
        " hours, " +
        minutes +
        " minutes, " +
        seconds +
        " seconds.";

      name.innerHTML = "<h1>" + n + "</h1>";

      counter.innerHTML = "<h2> Time remaining: " + formatted + " </h2>";

      console.log(diff / 1000);

      if (diff === 0) {
        alert("Time's up!");
        window.clearInterval(cd);
        name.innerHTML = "";
        counter.innerHTML = "";
        state = 0;
      }
    }
  }
});
