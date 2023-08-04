import { IsInt, IsNotEmpty, IsNumber } from 'class-validator';
export class InterestCalculationDto {
  @IsNotEmpty()
  @IsNumber()
  initialCapital: number;

  @IsNotEmpty()
  @IsNumber()
  monthlyInterestRateInPercentage: number;

  @IsNotEmpty()
  @IsNumber()
  @IsInt()
  investmentTimeInMonths: number;
}
