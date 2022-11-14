import IDispenser from "./IDispenser";

export default abstract class AbstractBaseDispenser implements IDispenser {

  private nextHandler: IDispenser | undefined;

  public getNext() {
    return this.nextHandler;
  }

  public setNext(dispenser: IDispenser): void {
    this.nextHandler = dispenser;
  }

  abstract dispense(amount: number): void;

}