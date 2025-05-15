import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { ConsoleLogger, Logger, VersioningType } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    logger: new ConsoleLogger(
      {
        colors: true,
        json: true,
      }
    ),
  });

  // Swagger

  // Enable API versioning
  app.enableVersioning({
    type: VersioningType.URI,
  });

  // Set up Swagger for v1
  const v1Config = new DocumentBuilder()
    .setTitle('My API - v1')
    .setDescription('API documentation for v1')
    .setVersion('1.0')
    .addBearerAuth()
    .build();
    
  const v1Document = SwaggerModule.createDocument(app, v1Config, {
    include: [/* v1 modules */],
  });
  SwaggerModule.setup('api/v1/docs', app, v1Document);
  
  // Set up Swagger for v2
  const v2Config = new DocumentBuilder()
    .setTitle('My API - v2')
    .setDescription('API documentation for v2')
    .setVersion('2.0')
    .addBearerAuth()
    .build();
    
  const v2Document = SwaggerModule.createDocument(app, v2Config, {
    include: [/* v2 modules */],
  });
  SwaggerModule.setup('api/v2/docs', app, v2Document);

  const config = new DocumentBuilder()
    .setTitle('My API')
    .setDescription('API documentation for My Application')
    .setVersion('1.0')
    .addBearerAuth() 
    .addTag('api')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  Logger.debug(`🚀 Application is running on: ${process.env.PORT}`);
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
