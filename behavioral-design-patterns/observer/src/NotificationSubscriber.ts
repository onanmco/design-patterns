import Employee from "./Employee";
import ISubscriber from "./ISubscriber";

export default class NotificationSubscriber implements ISubscriber {


  update(employee: Employee): void {
    console.log("Sending e-mail to team lead of the employee.");
    console.log(`
    Hello,

    ${employee.firstName} ${employee.lastName} has just started working with you.

    You can contact through ${employee.email},

    Thanks.
    `);
  }

}