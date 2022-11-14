import ActiveDirectorySubscriber from "./ActiveDirectorySubscriber";
import Employee from "./Employee";
import EventBus from "./EventBus";
import NotificationSubscriber from "./NotificationSubscriber";

const eventBus = new EventBus();

const activeDirectorySubscriber = new ActiveDirectorySubscriber();
const notificationSubscriber = new NotificationSubscriber();

eventBus.subscribe("employee_created", activeDirectorySubscriber);
eventBus.subscribe("employee_created", notificationSubscriber);

eventBus.notify("employee_created", {
  firstName: "Cem",
  lastName: "Onan",
  email: "mustafa.onan@orioninc.com"
} as Employee);