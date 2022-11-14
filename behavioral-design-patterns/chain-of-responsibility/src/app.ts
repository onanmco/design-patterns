import prompt from "prompt-sync";
import AtmMachine from "./AtmMachine";


const prompter = prompt({ sigint: true });

const atmMachine = new AtmMachine();

while (true) {
  const amount = prompter("Please enter the amount of money you would like to withdraw:");
  if (parseInt(amount) % 10 != 0) {
    console.log("Amount should be in multiple of $10s");
    continue;
  }
  atmMachine.getDispenser().dispense(parseInt(amount));
}