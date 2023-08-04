import { Module } from '@nestjs/common';
import { ExerciseModule } from 'src/exercise/exercise.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [ExerciseModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
