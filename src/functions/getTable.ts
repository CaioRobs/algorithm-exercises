export const getTable = (num: number) => {
  const table: { [key: string]: number } = {};
  if (isNaN(num)) throw new Error('Invalid number');

  for (let i = 1; i <= 10; i += 1) {
    table[`${num} * ${i}`] = num * i;
  }
  return table;
};
