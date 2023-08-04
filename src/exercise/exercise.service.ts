import { Injectable } from '@nestjs/common';

@Injectable()
export class ExerciseService {
  getHello(): string {
    return 'Hello World!';
  }
}
