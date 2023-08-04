import { IsArray, IsNotEmpty } from 'class-validator';
export class GradeAverageDto {
  @IsNotEmpty()
  @IsArray({ each: true })
  grades: number[];
}
