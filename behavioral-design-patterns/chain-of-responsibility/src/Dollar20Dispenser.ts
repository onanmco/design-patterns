import AbstractBaseDispenser from "./AbstractBaseDispenser";

export default class Dollar20Dispenser extends AbstractBaseDispenser {

  dispense(amount: number): void {
    if (amount >= 20) {
      const banknotNumber = Math.floor(amount / 20);
      const remainder = amount % 20;
      console.log(`Dispensing ${banknotNumber} x $20.`);
      if (remainder != 0) {
        this.getNext()?.dispense(remainder);
      }
    } else {
      this.getNext()?.dispense(amount);
    }
  }

}