import State from "./State";

export default class Snapshot {

  private state: State;

  constructor(state: State) {
    this.state = {
      ...state
    };
  }

  public getState() {
    return this.state;
  }
}