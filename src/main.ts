import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

async function bootstrap() {
  try {
    const app = await NestFactory.create(AppModule);

    // Active le CORS pour autoriser le front sur localhost:3001
    app.enableCors({
      origin: 'http://localhost:3001',
      credentials: true,
    });

    const config = new DocumentBuilder()
      .setTitle('Stock API')
      .setDescription('API de gestion de stock')
      .setVersion('1.0')
      .build();
    const document = SwaggerModule.createDocument(app, config);
    SwaggerModule.setup('api', app, document);

    await app.listen(process.env.PORT ?? 3000);
    console.log(`Application is running on: ${await app.getUrl()}`);
  } catch (error) {
    console.error('Error starting the application', error);
    process.exit(1); // Quitte le processus en cas d'erreur critique
  }
}

// Ajout de `void` pour ignorer explicitement la promesse
void bootstrap();
