import { Controller, Get } from '@nestjs/common';
import { ExerciseService } from './exercise.service';
import { ApiTags } from '@nestjs/swagger';

@Controller('exercises')
@ApiTags('exercises')
export class ExerciseController {
  constructor(private readonly exerciseService: ExerciseService) {}

  @Get()
  getHello(): string {
    return this.exerciseService.getHello();
  }
}
