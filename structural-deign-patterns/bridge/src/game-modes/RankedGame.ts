import { Imap } from "../maps/Imap";
import { AbstractGame } from "./AbstractGame";

export class RankedGame extends AbstractGame {

  constructor(map: Imap) {
    super(map);
  }

  public startGame(): void {
    console.log(`A ranked game has been started on ${this.map.getName()}.`);
  }

}