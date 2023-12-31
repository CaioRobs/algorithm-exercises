const sieveOfEratosthenes = (n: number): number[] => {
  const allNumbers: boolean[] = new Array(n + 1).fill(true);
  allNumbers[0] = false;
  allNumbers[1] = false;

  for (let i = 2; i <= Math.sqrt(n); i += 1) {
    if (allNumbers[i]) {
      for (let j = i * i; j <= n; j += i) {
        allNumbers[j] = false;
      }
    }
  }

  const primeNumbers: number[] = [];
  for (let i = 2; i <= n; i += 1) {
    if (allNumbers[i]) {
      primeNumbers.push(i);
    }
  }

  return primeNumbers;
};

const tenthPrime = 29;
export const firstTenPrimes = sieveOfEratosthenes(tenthPrime);

export const isPrimeNumber = (num: number) =>
  sieveOfEratosthenes(num).at(-1) === num;
