import { Alert } from "./Alert";
import { INotificationSender } from "./INotificationSender";

export class SmsNotificationSender implements INotificationSender {

  private alert: Alert;

  constructor(alert: Alert) {
    this.alert = alert;
  }

  getAlert(): Alert {
    return this.alert;
  }

  sendNotification(): void {
    console.log("Sending an SMS message ", this.alert);
  }
}