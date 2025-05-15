import { Module } from '@nestjs/common';
import { EffectController } from './controller/effect.controller';
import { APP_INTERCEPTOR } from '@nestjs/core';
import { EffectRuntimeInterceptor } from '@nestjs-effect/core';

@Module({
    imports: [],
    controllers: [
        EffectController
    ],
    providers: [],
    exports: [],
})
export class EffectModuleModule {}
