import { Alert } from "./Alert";
import { EmailNotificationSender } from "./EmailNotificationSender";
import { Severity } from "./Severity";
import { SmsNotificationSender } from "./SmsNotificationSender";

export class NotificationSenderFactory {

  public static getNotificationSender(alert: Alert) {
    switch (alert.severity) {
      case Severity.MEDIUM:
        return new EmailNotificationSender(alert);
      case Severity.CRITICAL:
        return new SmsNotificationSender(alert);
      default:
        throw new Error("Not implemented.");
    }
  }
}