export enum Operators {
  "+" = "+",
  "-" = "-",
  "*" = "*",
  "/" = "/",
}

export const simpleCalculator = (
  firstNum: number,
  secondNum: number,
  operator: Operators
): number => {
  if (isNaN(firstNum) || isNaN(secondNum)) throw new Error("Invalid Numbers");

  switch (operator) {
    case Operators["+"]:
      return firstNum + secondNum;
    case Operators["-"]:
      return firstNum - secondNum;
    case Operators["*"]:
      return firstNum * secondNum;
    case Operators["/"]:
      return firstNum / secondNum;

    default:
      throw new Error("Invalid Operator");
  }
};
