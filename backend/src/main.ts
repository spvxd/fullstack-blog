import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ConfigService } from '@nestjs/config';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const swaggerConfig = new DocumentBuilder()
      .setTitle('Fullstack blog')
      .setVersion('1.0')
      .build();
  const documentFactory = () => SwaggerModule.createDocument(app, swaggerConfig);
  SwaggerModule.setup('api', app, documentFactory);
  app.enableCors()
  app.setGlobalPrefix('/api');
  const config = app.get<ConfigService>(ConfigService);
  const port = config.get('APP_PORT');

  await app.listen(port || 3000, () => console.log(`Server listening on http://localhost:${port}\nSwagger on http://localhost:${port}/api `));
}
bootstrap();
