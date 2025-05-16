import { Injectable } from '@nestjs/common';

@Injectable()
export class OrdersService {
    constructor() {}

    public async createOrder(order: any) {
        console.log('Order created', order);
    }

    public async confirmationOrder(order: any) {
        console.log('Order created', order);
    }
}
