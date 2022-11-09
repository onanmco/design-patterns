import { Alert } from "./Alert";
import { INotificationSender } from "./INotificationSender";
import { NotificationSenderFactory } from "./NotificationSenderFactory";
import { Severity } from "./Severity";

const alert: Alert = {
  severity: Severity.CRITICAL,
  details: "Hey, this is a critical severity alert."
};

const notificationSender: INotificationSender = NotificationSenderFactory.getNotificationSender(alert);

notificationSender.sendNotification();