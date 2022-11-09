"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const NotificationSenderFactory_1 = require("./NotificationSenderFactory");
const Severity_1 = require("./Severity");
const alert = {
    severity: Severity_1.Severity.CRITICAL,
    details: "Hey, this is a critical severity alert."
};
const notificationSender = NotificationSenderFactory_1.NotificationSenderFactory.getNotificationSender(alert);
notificationSender.sendNotification();
