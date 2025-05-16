import { EventsHandler, IEventHandler } from '@nestjs/cqrs';
import { OrderCreatedEvent } from '../order.event';
import { OrdersService } from '../../services/order.service';

@EventsHandler(OrderCreatedEvent)
export class SendOrderConfirmationHandler implements IEventHandler<OrderCreatedEvent> {
    constructor(private ordersService: OrdersService) {}
    async handle(event: OrderCreatedEvent) {
        const { order } = event;
        await this.ordersService.confirmationOrder(order);
    }
}