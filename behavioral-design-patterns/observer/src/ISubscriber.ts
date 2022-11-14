import Employee from "./Employee";

export default interface ISubscriber {

  update(employee: Employee): void;
}