import { Order } from "./dto/Order";
import crypto from "crypto";

export class ShippingService {

  public dispatch(order: Order): string {
    console.log(`Fetching customer's address information...`);
    console.log(`Dispatching the shipping...`);

    const randomTrackingNumber = crypto.randomBytes(16).toString("hex");

    console.log(`Tracking number generated: ${randomTrackingNumber}.`);
    return randomTrackingNumber;
  }
}