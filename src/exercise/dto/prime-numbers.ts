import { IsNotEmpty, IsNumber } from 'class-validator';

export class PrimeNumbersDto {
  @IsNotEmpty()
  @IsNumber()
  number: number;
}
