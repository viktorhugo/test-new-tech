import { Injectable } from '@nestjs/common';
import { Saga, ofType } from '@nestjs/cqrs';
import { Observable, map } from 'rxjs';
import { PaymentProcessedEvent } from '../events/order.event';

// * Advanced Pattern: Sagas for Multi-Step Processes

@Injectable()
export class OrdersSaga {
    @Saga()
    orderCreated = (events$: Observable<any>): Observable<any> => {
        return events$.pipe(
            ofType(PaymentProcessedEvent),
            map(event => {
                console.log('Payment processed, triggering shipping');
                // return new ShipOrderCommand(event.orderId);
            }),
        );
    }
}
