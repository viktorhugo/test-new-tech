import { Module } from "@nestjs/common";
import { SwaggerController } from "./controller/swagger.controller";


@Module({
    imports: [],
    controllers: [
        SwaggerController
    ],
    providers: [],
    exports: [],
})
export class SwaggerModuleModule {}
