import { Imap } from "../maps/Imap";
import { AbstractGame } from "./AbstractGame";

export class WithBots extends AbstractGame {

  constructor(map: Imap) {
    super(map);
  }

  public startGame(): void {
    console.log(`A game has been started with bots on ${this.map.getName()}.`);
  }

}