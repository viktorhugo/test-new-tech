import { EventsHandler, IEventHandler } from '@nestjs/cqrs';
import { OrderCreatedEvent } from '../order.event';
import { PaymentService } from '../../services/payment.service';

@EventsHandler(OrderCreatedEvent)
export class ProcessPaymentHandler implements IEventHandler<OrderCreatedEvent> {
    constructor(private paymentService: PaymentService) {}
    async handle(event: OrderCreatedEvent) {
        const { order } = event;
        await this.paymentService.processPayment(order);
    }
}