import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ExerciseModule } from './exercise/exercise.module';

@Module({
  imports: [ExerciseModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
