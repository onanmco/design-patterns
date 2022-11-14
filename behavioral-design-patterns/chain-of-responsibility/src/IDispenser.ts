export default interface IDispenser {

  setNext(dispenser: IDispenser): void;
  dispense(amount: number): void;
}