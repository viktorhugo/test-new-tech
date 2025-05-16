import { Module } from '@nestjs/common';
import { OrderController } from './controller/order.controller';
import { OrdersService } from './services/order.service';
import { CqrsModule } from '@nestjs/cqrs';
import { PaymentService } from './services/payment.service';
import { InventoryService } from './services/inventory.service';

@Module({
    imports: [CqrsModule],
    controllers: [OrderController],
    providers: [OrdersService, PaymentService, InventoryService],
})
export class OrdersModule {}
