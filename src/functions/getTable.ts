export const getTable = (num: number) => {
  if (isNaN(num)) throw new Error('Invalid number');

  for (let i = 1; i <= 10; i += 1) {
    console.log(`${num} * ${i} = ${num * i}`);
  }
};
