import { EffectRuntimeInterceptor } from '@nestjs-effect/core';
import { Controller, Get, UseInterceptors } from '@nestjs/common';


interface ResultEffect {
    ok: boolean;
    data: string;
}

//*! https://freedium.cfd/https://medium.com/@yatogamii/how-to-use-nestjs-effect-library-72804e60291a

@Controller('effect')
@UseInterceptors(EffectRuntimeInterceptor)
export class EffectController {

    constructor() {}

    // @Get()
    // @UseInterceptors(EffectRuntimeInterceptor) // or here
    // public async getHello(): Effect.Effect<ResultEffect> {
    //     await new Promise((resolve) => setTimeout(resolve, 1500));
    //     return Effect.succeed({
    //         ok: true,
    //         data: 'Hello World',
    //     });
    // }

    // @Get()
    // @UseInterceptors(EffectRuntimeInterceptor) // or here
    // public async getFail(): Effect.Effect<ResultEffect> {
    //     await new Promise((resolve) => setTimeout(resolve, 1500));
    //     return Effect.fail({
    //         ok: true,
    //         data: 'Hello World',
    //     });
    // }
}
