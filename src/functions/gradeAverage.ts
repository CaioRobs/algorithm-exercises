export const getAverage = (grades: number[]): number => {
  if (grades.length === 0) return 0;
  const sum = grades.reduce((prev, curr) => prev + curr, 0);
  return Number((sum / grades.length).toFixed(2));
};
