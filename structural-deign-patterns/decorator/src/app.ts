import { Alert } from "./Alert";
import { Severity } from "./Severity";
import { NotificationSenderFactory } from "./NotificationSenderFactory";
import { WithEmailNotifications } from "./WithEmailNotifications";


const alert: Alert = {
  severity: Severity.CRITICAL,
  details: "This is a critical alert and dev. team will be notified via both e-mail and SMS channels."
};

const smsNotificationSender = NotificationSenderFactory.getNotificationSender(alert);

const smsAndEmailNotificationSender = new WithEmailNotifications(smsNotificationSender);

smsAndEmailNotificationSender.sendNotification();