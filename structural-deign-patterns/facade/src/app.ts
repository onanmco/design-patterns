import { Order } from "./dto/Order";
import { NotificationService } from "./NotificationService";
import { OrderFacade } from "./OrderFacade";
import { PaymentService } from "./PaymentService";
import { ShippingService } from "./ShippingService";

const order: Order = {
  customer: {
    email: "mustafa.onan@orioninc.com"
  },
  product: {
    name: "Computer",
    price: 50
  }
};

const paymentService = new PaymentService();
const shippingService = new ShippingService();
const notificationService = new NotificationService();

const orderFacade = new OrderFacade(paymentService, shippingService, notificationService);

orderFacade.processOrder(order);