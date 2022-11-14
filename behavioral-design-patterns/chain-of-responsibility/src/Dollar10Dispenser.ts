import AbstractBaseDispenser from "./AbstractBaseDispenser";

export default class Dollar10Dispenser extends AbstractBaseDispenser {

  dispense(amount: number): void {
    if (amount >= 10) {
      const banknotNumber = Math.floor(amount / 10);
      const remainder = amount % 10;
      console.log(`Dispensing ${banknotNumber} x $10.`);
      if (remainder != 0) {
        this.getNext()?.dispense(remainder);
      }
    } else {
      this.getNext()?.dispense(amount);
    }
  }

}