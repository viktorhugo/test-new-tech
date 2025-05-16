import { Module } from '@nestjs/common';
import { CqrsModule } from '@nestjs/cqrs';
import { OrdersModule } from './orders/orders.module';

@Module({
    imports: [
        OrdersModule
    ],
    controllers: [],
    providers: []
})
export class EventDrivenArchitectureModule {}
