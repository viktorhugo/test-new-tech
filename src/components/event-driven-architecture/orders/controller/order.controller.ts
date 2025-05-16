import { Body, Controller, Post } from '@nestjs/common';
import { OrdersService } from '../services/order.service';
import { EventBus } from '@nestjs/cqrs';
import { OrderCreatedEvent } from '../events/order.event';
import { CreateOrderDto } from '../DTO/order.dto';

@Controller('orders')
export class OrderController {
    constructor(
        private readonly ordersService: OrdersService,
        private readonly eventBus: EventBus,
    ) {}
    @Post()
    async createOrder(@Body() createOrderDto: CreateOrderDto) {
        // Just create the order
        const order = await this.ordersService.createOrder(createOrderDto);
        
        // Publish an event that the order was created
        this.eventBus.publish(new OrderCreatedEvent(order));
        
        // Return immediately to the client
        return order;
    }
}
