import { Injectable } from '@nestjs/common';

@Injectable()
export class PaymentService {
    constructor() {}

    public async processPayment(order: any) {
        console.log('Order created', order);
    }
}
