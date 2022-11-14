import { Order } from "./dto/Order";
import { NotificationService } from "./NotificationService";
import { PaymentService } from "./PaymentService";
import { ShippingService } from "./ShippingService";

export class OrderFacade {

  private paymentService: PaymentService;
  private shippingService: ShippingService;
  private notificationService: NotificationService;

  constructor
  (
    paymentService: PaymentService, 
    shippingService: ShippingService, 
    notificationService: NotificationService
  ) {
    this.paymentService = paymentService;
    this.shippingService = shippingService;
    this.notificationService = notificationService;
  }

  public processOrder(order: Order) {
    const currentBalance = this.paymentService.makePayment(order);
    const trackingId = this.shippingService.dispatch(order);
    this.notificationService.sendNotification(order, trackingId, currentBalance);
  }
}