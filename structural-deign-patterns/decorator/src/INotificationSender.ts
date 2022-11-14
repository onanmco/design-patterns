import { Alert } from "./Alert";

export interface INotificationSender {

  sendNotification(): void;
  getAlert(): Alert;
}