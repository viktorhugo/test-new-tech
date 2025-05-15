import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { EffectModule } from '@nestjs-effect/core';
import { EffectModuleModule } from './modules/efect/effect-module.module';
import { SwaggerModuleModule } from './modules/swagger/swagger-module.module';

@Module({
  imports: [
    SwaggerModuleModule,
    EffectModuleModule,
    // Effect Module
    EffectModule.forRoot()
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
