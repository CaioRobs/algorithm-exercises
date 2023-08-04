import { IsNotEmpty, IsString } from 'class-validator';

export class VowelCounterDto {
  @IsNotEmpty()
  @IsString()
  string: string;
}
