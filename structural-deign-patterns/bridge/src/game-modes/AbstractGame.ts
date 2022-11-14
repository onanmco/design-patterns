import { Imap } from "../maps/Imap";

export abstract class AbstractGame {

  protected map: Imap;

  constructor(map: Imap) {
    this.map = map;
  }

  public abstract startGame(): void;
}