export const calculateInvestmentFinalValue = (
  initialCapital: number,
  monthlyInterestRateInPercentage: number,
  investmentTimeInMonths: number,
): number => {
  console.log({
    initialCapital,
    monthlyInterestRateInPercentage,
    investmentTimeInMonths,
  });
  const rate = monthlyInterestRateInPercentage / 100;
  const interest = (1 + rate) ** investmentTimeInMonths;
  console.log({
    rate,
    plsrate: 1 + rate,
    interest,
    final: initialCapital * interest,
  });
  return Number((initialCapital * interest).toFixed(2));
};
