import { IsEnum, IsNotEmpty, IsNumber } from 'class-validator';
import { Operators } from 'src/functions/simpleCalculator';

export class CalculateDto {
  @IsNotEmpty()
  @IsNumber()
  firstNumber: number;

  @IsNotEmpty()
  @IsNumber()
  secondNumber: number;

  @IsNotEmpty()
  @IsEnum(Operators)
  operator: Operators;
}
