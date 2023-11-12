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
  for (let i = 1; i <= x; i++) {
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

const isPrimeInput = document.querySelector("is-prime-input");

isPrimeInput.addEventListener("click", function () {});
