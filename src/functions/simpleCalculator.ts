import { BadRequestException } from '@nestjs/common';

export enum Operators {
  '+' = '+',
  '-' = '-',
  '*' = '*',
  '/' = '/',
}

export const simpleCalculator = (
  firstNum: number,
  secondNum: number,
  operator: Operators,
): number => {
  if (isNaN(firstNum) || isNaN(secondNum))
    throw new BadRequestException('Invalid Numbers');

  switch (operator) {
    case Operators['+']:
      return firstNum + secondNum;

    case Operators['-']:
      return firstNum - secondNum;

    case Operators['*']:
      return firstNum * secondNum;

    case Operators['/']:
      return firstNum / secondNum;

    default:
      throw new BadRequestException('Invalid Operator');
  }
};
