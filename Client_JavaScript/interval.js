// Define the function
// Save it as a property of window to prevent re-defining variables
window.freeRiceHackFunc = function() {
  let problem = document.getElementsByClassName("card-title")[0].innerText;
  let pr, answer;

  // Check the operation and calculate the answer
  if (problem.includes('x')) {
    pr = problem.split('x').map(n => parseInt(n));
    answer = pr[0] * pr[1];
  } else if (problem.includes('/')) {
    pr = problem.split('/').map(n => parseInt(n));
    answer = pr[0] / pr[1];
  } else if (problem.includes('+')) {
    pr = problem.split('+').map(n => parseInt(n));
    answer = pr[0] + pr[1];
  } else if (problem.includes('-')) {
    pr = problem.split('-').map(n => parseInt(n));
    answer = pr[0] - pr[1];
  }

  let opts = document.getElementsByClassName('card-button');

  let a = opts[0];
  let b = opts[1];
  let c = opts[2];
  let d = opts[3];

  if (parseInt(a.innerText) == answer) {
    a.click();
  } else if (parseInt(b.innerText) == answer) {
    b.click();
  } else if (parseInt(c.innerText) == answer) {
    c.click();
  } else if (parseInt(d.innerText) == answer) {
    d.click();
  }

  for (let i = 0; i < window.bruh.length; i++) {
    clearTimeout(window.bruh[i]);
    bruh.shift();
  }

  bruh.push(setTimeout(window.freeRiceHackFunc, 400));
}

// Define a list to save all the timeouts
// Save it as a property of window to prevent re-defining variables
window.bruh = [];

// Start the hack with an initial timeout, it will recall itself automatically
bruh.push(setTimeout(window.freeRiceHackFunc, 400));
