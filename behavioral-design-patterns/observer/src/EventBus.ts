import ISubscriber from "./ISubscriber";

export default class EventBus {

  private subscribers: { [key: string]: ISubscriber[] };

  constructor() {
    this.subscribers = {};
  }

  public subscribe(eventType: string, subscriber: ISubscriber): void {
    if (!this.subscribers[eventType]) {
      this.subscribers[eventType] = [];
    }
    this.subscribers[eventType].push(subscriber);
  }

  public notify(eventType: string, eventData: any) {
    this.subscribers[eventType].forEach(subscriber => {
      subscriber.update(eventData);
    });
  }
}