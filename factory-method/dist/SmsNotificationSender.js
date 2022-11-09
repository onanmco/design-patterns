"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SmsNotificationSender = void 0;
class SmsNotificationSender {
    constructor(alert) {
        this.alert = alert;
    }
    sendNotification() {
        console.log("Sending an SMS message ", this.alert);
    }
}
exports.SmsNotificationSender = SmsNotificationSender;
