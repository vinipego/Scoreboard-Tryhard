// declaring output elements
const homeOutputScore = document.getElementById("home-output-score");
const periodOutput = document.getElementById("period-output");
const homeFoulsOutput = document.getElementById("home-fouls-output");
const guestFoulsOutput = document.getElementById("guest-fouls-output");
const guestOutputScore = document.getElementById("guest-output-score");
const timerOutput = document.getElementById("timer-output");

// declaring buttons elements
const decrementBtn = document.getElementById("decrement-btn");
const resetBtn = document.getElementById("reset-btn");
const incrementBtn = document.getElementById("increment-btn");
const resetGameBtn = document.getElementById("reset-game-btn");
const pauseBtn = document.getElementById("pause-btn");
const playBtn = document.getElementById("platy-btn");

// changed to 12 minutes because NBA's game have 4 quarters of 12 minutes each.
//  source: https://nbatrips.com/en/understanding-nba-game-duration-how-long-is-an-nba-quarter/#:~:text=How%20Long%20is%20Each%20Basketball,have%20two%2020%2Dminute%20halves.
const twelveMinutes = 60 * 0.5;

// global variables to manage the interval and remaining time
let timerInterval = null;
let remainingTime = null;

// declaring initial scoreboard numbers
// re-using a function that already set's
// the entire board to zeros.
resetGame();

// declaring swiftui toggle elements
const homeCheckbox = document.getElementById("home-checkbox");
const guestCheckbox = document.getElementById("guest-checkbox");
const periodCheckbox = document.getElementById("period-checkbox");
const homeFoulCheckbox = document.getElementById("home-foul-checkbox");
const guestFoulCheckbox = document.getElementById("guest-foul-checkbox");

// adding event listeners to buttons
decrementBtn.addEventListener("click", subtractOneFromScore);
resetBtn.addEventListener("click", resetScore);
incrementBtn.addEventListener("click", addOneToScore);
resetGameBtn.addEventListener("click", resetGame);
pauseBtn.addEventListener("click", pauseTimer);
playBtn.addEventListener("click", playTimer);

function subtractOneFromScore() {
  //   check home checkbox
  if (homeCheckbox.checked == true) {
    let placeHolderNum = homeOutputScore.textContent;
    placeHolderNum = parseInt(placeHolderNum) - 1;
    if (placeHolderNum < 0) {
      placeHolderNum = 0;
    } else {
      // final result displayed
      homeOutputScore.textContent = placeHolderNum.toLocaleString("en-US", {
        minimumIntegerDigits: 2,
        useGrouping: false,
      });
    }
  } else {
    // do something for when it's not checked.
  }
  // check guest checkbox
  if (guestCheckbox.checked == true) {
    let placeHolderNum = guestOutputScore.textContent;
    placeHolderNum = parseInt(placeHolderNum) - 1;
    if (placeHolderNum < 0) {
      placeHolderNum = 0;
    } else {
      // final result displayed
      guestOutputScore.textContent = placeHolderNum.toLocaleString("en-US", {
        minimumIntegerDigits: 2,
        useGrouping: false,
      });
    }
  } else {
    // do something for when it's not checked.
  }
  //  check period checkbox
  if (periodCheckbox.checked == true) {
    let placeHolderNum = periodOutput.textContent;
    placeHolderNum = parseInt(placeHolderNum) - 1;
    if (placeHolderNum < 0) {
      placeHolderNum = 0;
    } else {
      // final result displayed
      periodOutput.textContent = placeHolderNum;
    }
  } else {
    // do something for when it's not checked.
  }

  //   check home foul checkbox
  if (homeFoulCheckbox.checked == true) {
    let placeHolderNum = homeFoulsOutput.textContent;
    placeHolderNum = parseInt(placeHolderNum) - 1;
    if (placeHolderNum < 0) {
      placeHolderNum = 0;
    } else {
      // final result displayed
      homeFoulsOutput.textContent = placeHolderNum;
    }
  } else {
    // do something for when it's not checked.
  }

  //   check guest foul checkbox
  if (guestFoulCheckbox.checked == true) {
    let placeHolderNum = guestFoulsOutput.textContent;
    placeHolderNum = parseInt(placeHolderNum) - 1;
    if (placeHolderNum < 0) {
      placeHolderNum = 0;
    } else {
      // final result displayed
      guestFoulsOutput.textContent = placeHolderNum;
    }
  } else {
    // do something for when it's not checked.
  }
}

function addOneToScore() {
  //   check home checkbox
  if (homeCheckbox.checked == true) {
    let placeHolderNum = homeOutputScore.textContent;
    placeHolderNum = parseInt(placeHolderNum) + 1;
    // limit scoreboard to 99 to avoid breaking the styling of the
    // scoreboard output box.
    if (placeHolderNum > 99) {
      placeHolderNum = 99;
    } else {
      // final result displayed
      homeOutputScore.textContent = placeHolderNum.toLocaleString("en-US", {
        minimumIntegerDigits: 2,
        useGrouping: false,
      });
    }
  } else {
    // do something for when it's not checked.
  }
  //   check guest checkbox
  if (guestCheckbox.checked == true) {
    let placeHolderNum = guestOutputScore.textContent;
    placeHolderNum = parseInt(placeHolderNum) + 1;
    // limit scoreboard to 99 to avoid breaking the styling of the
    // scoreboard output box.
    if (placeHolderNum > 99) {
      placeHolderNum = 99;
    } else {
      // final result displayed
      guestOutputScore.textContent = placeHolderNum.toLocaleString("en-US", {
        minimumIntegerDigits: 2,
        useGrouping: false,
      });
    }
  } else {
    // do something for when it's not checked.
  }

  //   check period checkbox
  if (periodCheckbox.checked == true) {
    let placeHolderNum = periodOutput.textContent;
    placeHolderNum = parseInt(placeHolderNum) + 1;
    // NBA Men's basketball games have 4 quarters (periods)
    // of 12 minutes each. So our period shouldn't extend past 4
    if (placeHolderNum > 4) {
      placeHolderNum = 4;
    } else {
      // final result displayed
      periodOutput.textContent = placeHolderNum;
    }
  } else {
    // do something for when it's not checked.
  }

  //   check home foul checkbox
  if (homeFoulCheckbox.checked == true) {
    let placeHolderNum = homeFoulsOutput.textContent;
    placeHolderNum = parseInt(placeHolderNum) + 1;
    // limit fouls to 9 to so it doesn't breaking the styling
    // of the foul scoreboard
    if (placeHolderNum > 9) {
      placeHolderNum = 9;
    } else {
      // final result displayed
      homeFoulsOutput.textContent = placeHolderNum;
    }
  } else {
    // do something for when it's not checked.
  }

  if (guestFoulCheckbox.checked == true) {
    let placeHolderNum = guestFoulsOutput.textContent;
    placeHolderNum = parseInt(placeHolderNum) + 1;
    // limit fouls to 9 to so it doesn't breaking the styling
    // of the foul scoreboard
    if (placeHolderNum > 9) {
      placeHolderNum = 9;
    } else {
      // final result displayed
      guestFoulsOutput.textContent = placeHolderNum;
    }
  } else {
    // do something for when it's not checked.
  }
}

function resetScore() {
  //   check home checkbox
  if (homeCheckbox.checked == true) {
    homeOutputScore.textContent = (0).toLocaleString("en-US", {
      minimumIntegerDigits: 2,
      useGrouping: false,
    });
  }

  //   check guest checkbox
  if (guestCheckbox.checked == true) {
    guestOutputScore.textContent = (0).toLocaleString("en-US", {
      minimumIntegerDigits: 2,
      useGrouping: false,
    });
  }

  //   check period checkbox
  if (periodCheckbox.checked == true) {
    periodOutput.textContent = 0;
  }

  //   check home foul checkbox
  if (homeFoulCheckbox.checked == true) {
    homeFoulsOutput.textContent = 0;
  }

  //   check guest foul checkbox
  if (guestFoulCheckbox.checked == true) {
    guestFoulsOutput.textContent = 0;
  }
}

function resetGame() {
  homeOutputScore.textContent = (0).toLocaleString("en-US", {
    minimumIntegerDigits: 2,
    useGrouping: false,
  });
  guestOutputScore.textContent = (0).toLocaleString("en-US", {
    minimumIntegerDigits: 2,
    useGrouping: false,
  });
  periodOutput.textContent = 0;
  homeFoulsOutput.textContent = 0;
  guestFoulsOutput.textContent = 0;
  clearInterval(timerInterval);
  startTimer(twelveMinutes, timerOutput);
}

function pauseTimer() {
  clearInterval(timerInterval);
}
function playTimer() {
  startTimer(remainingTime, timerOutput);
}
//timer function from stackoverflow
// source: https://stackoverflow.com/questions/20618355/how-to-write-a-countdown-timer-in-javascript

function startTimer(duration, timerOutput) {
  let timer = duration,
    minutes,
    seconds;
  remainingTime = timer;

  timerInterval = setInterval(function () {
    minutes = parseInt(timer / 60, 10);
    seconds = parseInt(timer % 60, 10);

    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;

    timerOutput.textContent = minutes + ":" + seconds;

    if (--timer < 0) {
      // Reset timer (optional if it's meant to repeat)
      // I can't removed it without stopping the timer #sad.
      timer = duration;
    }
    // Update remaining time
    remainingTime = timer;
  }, 1000);
}
