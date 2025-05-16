// events/order-created.event.ts
export class OrderCreatedEvent {
    constructor(public readonly order: any) {}
}

export class PaymentProcessedEvent {
    constructor(public readonly order: any) {}
}

