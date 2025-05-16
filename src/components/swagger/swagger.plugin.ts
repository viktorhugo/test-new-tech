// documentation.plugin.ts
import { INestApplication } from '@nestjs/common';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import * as fs from 'fs';

export function setupSwagger(app: INestApplication): void {
    const config = new DocumentBuilder()
        .setTitle('My API')
        .setDescription('API documentation')
        .setVersion(process.env.API_VERSION || '1.0')
        .addBearerAuth()
        .build();
    const document = SwaggerModule.createDocument(app, config);
    
    // Add custom documentation enhancements
    document.servers = [
        { url: process.env.API_URL || 'http://localhost:3000', description: 'Development server' },
        { url: 'https://staging-api.example.com', description: 'Staging server' },
        { url: 'https://api.example.com', description: 'Production server' },
    ];
    
    // Generate static documentation if needed
    if (process.env.GENERATE_STATIC_DOCS === 'true') {
        fs.writeFileSync('./swagger-spec.json', JSON.stringify(document));
    }
    
    SwaggerModule.setup('api', app, document);
}