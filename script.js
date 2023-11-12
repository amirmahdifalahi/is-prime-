"use strict";

// is prime function
const isPrime = function (x) {
  let temp = true;
  for (let i = 2; i <= x ** 0.5; i++) {
    if (x % i === 0) {
      temp = false;
      break;
    }
  }
  return temp;
};
// console.log(isPrime(999983));
// end of is prime function

const calc = function (x) {
  let primeNumbers = "";
  let primeCounter = 0;
  let lastPrimeNumber;
  for (let i = 2; i <= x; i++) {
    if (isPrime(i)) {
      primeNumbers += `${i} -`;
      primeCounter += 1;
      lastPrimeNumber = i;
    }
  }
  console.log(primeNumbers);
  // console.log(primeCounter);
  // console.log(lastPrimeNumber);
  return [primeCounter, lastPrimeNumber];
};

// calc(100)

const isPrimeInput = document.querySelector(".is-prime-input");
const isPrimeResult = document.querySelector(".is-prime-result");
const btn = document.querySelector(".btn");
const primeCounterValue = document.querySelector(".prime-counter-value");
const lastPrimeNumber = document.querySelector(".last-prime-number");

const updateIsPrimeInput = function (e) {
  // console.log(e.target.value);
  if (!e.target.value) {
    isPrimeResult.textContent = "";
  } else {
    isPrimeResult.textContent = isPrime(Number(e.target.value));
  }
};

const updateBtn = function () {
  const primeCountInput = Number(
    document.querySelector(".prime-count-input").value
  );
  const [PC, LP] = calc(primeCountInput);
  // console.log(PC);
  // console.log(LP);
  primeCounterValue.textContent = `Number of prime numbers: ${PC}`;
  lastPrimeNumber.textContent = `Last prime number: ${LP}`;
};

isPrimeInput.addEventListener("input", updateIsPrimeInput);

btn.addEventListener("click", updateBtn);
