"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NotificationSenderFactory = void 0;
const EmailNotificationSender_1 = require("./EmailNotificationSender");
const Severity_1 = require("./Severity");
const SmsNotificationSender_1 = require("./SmsNotificationSender");
class NotificationSenderFactory {
    static getNotificationSender(alert) {
        switch (alert.severity) {
            case Severity_1.Severity.MEDIUM:
                return new EmailNotificationSender_1.EmailNotificationSender(alert);
            case Severity_1.Severity.CRITICAL:
                return new SmsNotificationSender_1.SmsNotificationSender(alert);
            default:
                throw new Error("Not implemented.");
        }
    }
}
exports.NotificationSenderFactory = NotificationSenderFactory;
