import { Alert } from "./Alert";
import { INotificationSender } from "./INotificationSender";

export class EmailNotificationSender implements INotificationSender {

  private alert: Alert;

  public constructor(alert: Alert) {
    this.alert = alert;
  }

  getAlert(): Alert {
    return this.alert;
  }

  sendNotification(): void {
    console.log("Sending email ", this.alert);
  }
}