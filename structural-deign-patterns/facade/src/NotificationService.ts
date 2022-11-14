import { Order } from "./dto/Order";

export class NotificationService {

  public sendNotification(order: Order, trackingNumber: string, currentBalance: number): void {

    const {
      customer: {
        email
      },
      product: {
        price,
        name
      }
    } = order;

    console.log(`Sending notification to customer's e-mail address: ${order.customer.email}`);
    const message = `
    To: ${email}
    Hello,

    Thanks for your recent ${name} purchase!
    Product price $${price} has just been deducted against your account's balance.
    Your current balance is $${currentBalance}.

    You can track your shipping from the following tracking id: ${trackingNumber}.

    Thanks.
    `
    console.log(message);
  }
}