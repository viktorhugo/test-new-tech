
import { ProcessPaymentHandler } from './process-payment.handler copy';
import { SendOrderConfirmationHandler } from './send-order-confirmation.handler';
import { UpdateInventoryHandler } from './update-inventory.handler';
// Import other handlers...

export const OrderCreatedHandlers = [
    ProcessPaymentHandler,
    UpdateInventoryHandler,
    SendOrderConfirmationHandler,
  // Add other handlers...
];