import { INestApplication } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

export const setupSwagger = (app: INestApplication): void => {
  const swaggerRoute = 'swagger';

  const config = new DocumentBuilder()
    .setTitle('Dev Mid Test')
    .setDescription('Exercises')
    .setVersion('1.0')
    .build();

  const document = SwaggerModule.createDocument(app, config);

  SwaggerModule.setup(swaggerRoute, app, document);
};
