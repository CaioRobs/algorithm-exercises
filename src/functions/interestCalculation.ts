export const calculateInvestmentFinalValue = (
  initialCapital: number,
  monthlyInterestRateInPercentage: number,
  investmentTimeInMonths: number,
): number => {
  const rate = monthlyInterestRateInPercentage / 100;
  return Number(
    (initialCapital * ((1 + rate) ^ investmentTimeInMonths)).toFixed(2),
  );
};
