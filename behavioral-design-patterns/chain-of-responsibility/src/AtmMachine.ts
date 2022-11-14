import Dollar10Dispenser from "./Dollar10Dispenser";
import Dollar20Dispenser from "./Dollar20Dispenser";
import Dollar50Dispenser from "./Dollar50Dispenser";
import IDispenser from "./IDispenser";

export default class AtmMachine {

  private dispenser: IDispenser;

  constructor() {
    const dollar50Dispenser = new Dollar50Dispenser();
    const dollar20Dispenser = new Dollar20Dispenser();
    const dollar10Dispenser = new Dollar10Dispenser();

    this.dispenser = dollar50Dispenser;
    dollar50Dispenser.setNext(dollar20Dispenser);
    dollar20Dispenser.setNext(dollar10Dispenser);
  }

  public getDispenser() {
    return this.dispenser;
  }

}