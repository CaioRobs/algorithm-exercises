import { NestFactory } from '@nestjs/core';
import { setupSwagger } from './swagger';
import { AppModule } from './app/app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  setupSwagger(app);

  await app.listen(3000);
}

bootstrap();
