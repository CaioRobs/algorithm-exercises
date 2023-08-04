import { IsNotEmpty, IsNumber } from 'class-validator';

export class TableDto {
  @IsNotEmpty()
  @IsNumber()
  number: number;
}
