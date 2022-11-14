import { Imap } from "../maps/Imap";
import { AbstractGame } from "./AbstractGame";

export class UnrankedGame extends AbstractGame {

  constructor(map: Imap) {
    super(map);
  }

  public startGame(): void {
    console.log(`An unranked game has been started on ${this.map.getName()}.`);
  }

}