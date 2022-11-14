import { INotificationSender } from "./INotificationSender";
import { NotitifactionDecorator } from "./NotificationDecorator";
import { SmsNotificationSender } from "./SmsNotificationSender";

export class WithSmsNotifications extends NotitifactionDecorator {

  private smsNotificationSender: INotificationSender;

  constructor(wrappee: INotificationSender) {
    super(wrappee);
    this.smsNotificationSender = new SmsNotificationSender(wrappee.getAlert());
  }

  public sendNotification(): void {
    super.sendNotification();
    this.smsNotificationSender.sendNotification();
  }
}