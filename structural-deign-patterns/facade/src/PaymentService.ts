import { Order } from "./dto/Order";

export class PaymentService {

  public makePayment(order: Order): number {
    const {
      customer: {
      },
      product: {
        price
      }
    } = order;

    const currentBalance = 100;

    console.log(`Fetching customer's current balance...`);
    console.log(`Customer has $${currentBalance} in the account...`);
    console.log(`Product's price is $${price} and customer's account has sufficient balance...`);
    console.log("Starting to a transaction.");
    console.log(`$${price} has been deducted against customer's account. Current balance = $${currentBalance - price}.`);
    console.log("Committing transaction...");

    return currentBalance - price;
  }

}