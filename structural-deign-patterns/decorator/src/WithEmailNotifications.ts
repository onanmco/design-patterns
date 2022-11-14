import { INotificationSender } from "./INotificationSender";
import { NotitifactionDecorator } from "./NotificationDecorator";
import { EmailNotificationSender } from "./EmailNotificationSender";

export class WithEmailNotifications extends NotitifactionDecorator {

  private emailNotificationSender: INotificationSender;

  constructor(wrappee: INotificationSender) {
    super(wrappee);
    this.emailNotificationSender = new EmailNotificationSender(wrappee.getAlert());
  }

  public sendNotification(): void {
    super.sendNotification();
    this.emailNotificationSender.sendNotification();
  }
}