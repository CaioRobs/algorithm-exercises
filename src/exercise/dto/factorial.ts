import { IsNotEmpty, IsNumber } from 'class-validator';

export class FactorialDto {
  @IsNotEmpty()
  @IsNumber()
  number: number;
}
