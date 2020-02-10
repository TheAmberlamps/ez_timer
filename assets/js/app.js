document.addEventListener(
  "click",
  function(event) {
    // If the clicked element doesn't have the right selector, bail
    if (!event.target.matches("#click-me")) return;

    // Don't follow the link
    event.preventDefault();

    // get name and date object
    var eN = document.getElementById("evNam");
    var name = eN.value;
    var eD = document.getElementById("evDat");
    var futDate = eD.value;

    // establish current time
    var currDate = new Date();

    // parse dates into milliseconds
    var setDate = Date.parse(futDate);
    var currMil = Date.parse(currDate);

    // find difference between dates in milliseconds
    var diff = setDate - currMil;

    // arithmetic operations used to arrange data in readable fashion
    var currSecs = currMil / 1000;

    var currMins = currSecs / 60;

    var currHours = currMins / 60;

    var currDays = currHours / 24;

    var currYears = currDays / 365;

    // console logs for days
    console.log(name);
    console.log(futDate);
    console.log(currDate);
    console.log(setDate);
    console.log(currMil);
    console.log(currSecs);
    console.log(currMins);
    console.log(currHours);
    console.log(currDays);
    console.log(currYears);
    console.log(diff);
  },
  false
);
