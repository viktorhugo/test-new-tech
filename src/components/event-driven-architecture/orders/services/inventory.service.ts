import { Injectable } from '@nestjs/common';

@Injectable()
export class InventoryService {
    constructor() {}

    public async updateStock(order: any) {
        console.log('Order created', order);
    }
}
