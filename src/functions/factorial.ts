export const factorial = (num: number) => {
  let result = 1;

  for (let i = 2; i <= num; i += 1) {
    result *= i;
  }
  return result;
};
