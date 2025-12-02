// Global state (demonstrates global scope)
const appState = { spinnerRunning: false };

// Part 2: Functions with parameters and return values
// calculateSum: takes two numbers, returns their sum (demonstrates parameters + return)
function calculateSum(a, b) {
  const result = Number(a) + Number(b);
  return result;
}

// toggleClass: toggles a class on an element and returns the new boolean state
function toggleClass(el, className) {
  if (!el) return false;
  return el.classList.toggle(className);
}

// setAnimationDuration: sets a CSS custom property for animation duration and returns seconds
function setAnimationDuration(el, ms) {
  if (!el) return 0;
  el.style.setProperty('--anim-duration', ms + 'ms');
  return ms / 1000; // returns seconds
}

// demonstrate local scope
function demonstrateScope() {
  const localValue = 'I am local to demonstrateScope';
  console.log(localValue); // accessible here
  console.log('appState (global):', appState); // global accessible here
}

document.addEventListener('DOMContentLoaded', () => {
  // Part 1: Animate box using CSS class triggered by JS
  const animatedBox = document.getElementById('animatedBox');
  const triggerBox = document.getElementById('triggerBox');
  triggerBox.addEventListener('click', () => {
    // toggle animate; remove after animation to allow re-trigger
    animatedBox.classList.remove('animate');
    // force reflow so animation can replay
    // eslint-disable-next-line no-unused-expressions
    void animatedBox.offsetWidth;
    animatedBox.classList.add('animate');
  });

  // Part 2: Sum calculator
  const sumBtn = document.getElementById('sumBtn');
  const numA = document.getElementById('numA');
  const numB = document.getElementById('numB');
  const sumResult = document.getElementById('sumResult');
  sumBtn.addEventListener('click', () => {
    const a = numA.value;
    const b = numB.value;
    const sum = calculateSum(a, b);
    sumResult.textContent = `Sum = ${sum}`;
    console.log('calculateSum returned:', sum);
  });

  // Part 3: Flip card
  const flipBtn = document.getElementById('flipBtn');
  const flipCard = document.getElementById('flipCard');
  flipBtn.addEventListener('click', () => {
    const isNow = toggleClass(flipCard, 'is-flipped');
    console.log('Card flipped? ', isNow);
  });

  // Spinner start/stop
  const spinner = document.getElementById('spinner');
  const toggleSpinner = document.getElementById('toggleSpinner');
  toggleSpinner.addEventListener('click', () => {
    appState.spinnerRunning = toggleClass(spinner, 'spin');
    console.log('Spinner running:', appState.spinnerRunning);
  });

  // Modal open/close
  const openModal = document.getElementById('openModal');
  const closeModal = document.getElementById('closeModal');
  const modal = document.getElementById('modal');
  openModal.addEventListener('click', () => {
    modal.setAttribute('aria-hidden', 'false');
  });
  closeModal.addEventListener('click', () => {
    modal.setAttribute('aria-hidden', 'true');
  });

  // demo of setAnimationDuration
  animatedBox.addEventListener('mouseenter', () => {
    // slow down pulse a bit while hovered
    setAnimationDuration(animatedBox, 700);
  });
  animatedBox.addEventListener('mouseleave', () => {
    setAnimationDuration(animatedBox, 400);
  });

  demonstrateScope();
});

// Exporting in case this file is imported elsewhere (optional)
export { calculateSum, toggleClass, setAnimationDuration };
