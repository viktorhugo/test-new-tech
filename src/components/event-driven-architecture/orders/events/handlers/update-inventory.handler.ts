import { EventsHandler, IEventHandler } from '@nestjs/cqrs';
import { OrderCreatedEvent } from '../order.event';
import { InventoryService } from '../../services/inventory.service';

@EventsHandler(OrderCreatedEvent)
export class UpdateInventoryHandler implements IEventHandler<OrderCreatedEvent> {
    constructor(private inventoryService: InventoryService) {}
    async handle(event: OrderCreatedEvent) {
        const { order } = event;
        await this.inventoryService.updateStock(order.items);
    }
}
