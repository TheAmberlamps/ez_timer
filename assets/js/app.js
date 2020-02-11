document.addEventListener(
  "click",
  function(event) {
    // If the clicked element doesn't have the right selector, bail
    if (!event.target.matches("#click-me")) return;

    // Don't follow the link
    event.preventDefault();

    // get name and date from form
    var eN = document.getElementById("evNam");
    var n = eN.value;
    var eD = document.getElementById("evDat");
    var futDate = eD.value;
    var counter = document.getElementById("counter");
    var name = document.getElementById("name");

    // establish current time
    var currDate = new Date();

    // parse dates into milliseconds
    var setDate = Date.parse(futDate);
    var currMil = Date.parse(currDate);

    // find difference between dates in milliseconds
    var diff = setDate - currMil;

    console.log(diff);

    var seconds = Math.floor((diff / 1000) % 60),
      minutes = Math.floor((diff / (1000 * 60)) % 60),
      hours = Math.floor((diff / (1000 * 60 * 60)) % 24),
      days = Math.floor(diff / (1000 * 60 * 60 * 24));

    hours = hours < 10 ? "0" + hours : hours;
    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;

    var placeholder = "";

    if (days > 1) {
      placeholder = " days ";
    } else {
      placeholder = " day ";
    }

    let formatted = days + placeholder + hours + ":" + minutes + ":" + seconds;

    name.innerHTML = "<h2>" + n + "</h2>";

    counter.innerHTML = "<h2> Time remaining: " + formatted + " </h2>";
  },
  false
);
