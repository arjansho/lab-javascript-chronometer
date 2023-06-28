const chronometer = new Chronometer();

// get the buttons:
const btnLeftElement = document.getElementById('btnLeft');
const btnRightElement = document.getElementById('btnRight');

// get the DOM elements that will serve us to display the time:
const minDecElement = document.getElementById('minDec');
const minUniElement = document.getElementById('minUni');
const secDecElement = document.getElementById('secDec');
const secUniElement = document.getElementById('secUni');
const milDecElement = document.getElementById('milDec');
const milUniElement = document.getElementById('milUni');
const splitsElement = document.getElementById('splits');

function printTime() {
  printMinutes();
  printSeconds();
  printMilliseconds();
}

function printMinutes() {
  const minutes = chronometer.computeTwoDigitNumber(chronometer.getMinutes());
  minDecElement.innerText = minutes[0];
  minUniElement.innerText = minutes[1];
}

function printSeconds() {
  const seconds = chronometer.computeTwoDigitNumber(chronometer.getSeconds());
  secDecElement.innerText = seconds[0];
  secUniElement.innerText = seconds[1];
}

// ==> BONUS
function printMilliseconds() {
  const milliseconds = chronometer.computeTwoDigitNumber(
    chronometer.getMilliseconds()
  );
  milDecElement.innerText = milliseconds[0];
  milUniElement.innerText = milliseconds[1];
}

function printSplit() {
  const listItem = `<li>${chronometer.split()}</li>`;
  splitsElement.insertAdjacentHTML('beforeend', listItem);
}

function clearSplits() {
  document.querySelectorAll('li').forEach(elem => {
    elem.remove()
  })
}

function setStopBtn() {
  chronometer.stop();
  btnLeftElement.innerText = 'START';
  btnRightElement.innerText = 'RESET';
  toggleButtonColors();
}

function setSplitBtn() {
  printSplit();
}

function setStartBtn() {
  chronometer.start(printTime);
  btnLeftElement.innerText = 'STOP';
  btnRightElement.innerText = 'SPLIT';
  toggleButtonColors();
}

function setResetBtn() {
  chronometer.reset();
  printTime();

  while (splitsElement.firstChild) {
    splitsElement.lastChild.remove();
  }

}

// Start/Stop Button
btnLeftElement.addEventListener('click', () => {
  if (btnLeftElement.innerText === 'START') {
    setStartBtn();
  } else if (btnLeftElement.innerText === 'STOP') {
    setStopBtn();
  }
});

// Reset/Split Button
btnRightElement.addEventListener('click', () => {
  if (btnLeftElement.innerText === 'START') {
    setResetBtn();
  } else if (btnLeftElement.innerText === 'STOP') {
    setSplitBtn();
  }
});