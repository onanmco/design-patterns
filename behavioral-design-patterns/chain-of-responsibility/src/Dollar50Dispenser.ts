import AbstractBaseDispenser from "./AbstractBaseDispenser";

export default class Dollar50Dispenser extends AbstractBaseDispenser {

  dispense(amount: number): void {
    if (amount >= 50) {
      const banknotNumber = Math.floor(amount / 50);
      const remainder = amount % 50;
      console.log(`Dispensing ${banknotNumber} x $50.`);
      if (remainder != 0) {
        this.getNext()?.dispense(remainder);
      }
    } else {
      this.getNext()?.dispense(amount);
    }
  }

}