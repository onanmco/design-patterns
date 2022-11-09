"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EmailNotificationSender = void 0;
class EmailNotificationSender {
    constructor(alert) {
        this.alert = alert;
    }
    sendNotification() {
        console.log("Sending email ", this.alert);
    }
}
exports.EmailNotificationSender = EmailNotificationSender;
