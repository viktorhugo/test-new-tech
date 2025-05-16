import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { EffectModule } from '@nestjs-effect/core';
import { EffectModuleModule } from './components/efect/effect-module.module';
import { SwaggerModuleModule } from './components/swagger/swagger-module.module';
import { EventDrivenArchitectureModule } from './components/event-driven-architecture/event-driven-architecture.module';

@Module({
  imports: [
    EffectModuleModule,
    // Effect Module
    EffectModule.forRoot(),
    // swagger module
    SwaggerModuleModule,
    // event driven architecture
    EventDrivenArchitectureModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
