import { IsNotEmpty, IsString } from 'class-validator';

export class PalindromeDto {
  @IsNotEmpty()
  @IsString()
  string: string;
}
