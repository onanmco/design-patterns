import { Alert } from "./Alert";
import { INotificationSender } from "./INotificationSender";

export class NotitifactionDecorator implements INotificationSender {

  private wrappee: INotificationSender;

  constructor(wrappee: INotificationSender) {
    this.wrappee = wrappee;
  }

  sendNotification(): void {
    this.wrappee.sendNotification();
  }

  getAlert(): Alert {
    return this.wrappee.getAlert();
  }
  
}