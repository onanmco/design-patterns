import Employee from "./Employee";
import ISubscriber from "./ISubscriber";

export default class ActiveDirectorySubscriber implements ISubscriber {

  update(employee: Employee): void {
    console.log("Registering the employee information into AD: ", employee);
  }


}