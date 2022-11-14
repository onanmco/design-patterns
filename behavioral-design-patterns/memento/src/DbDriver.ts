import Snapshot from "./Snapshot";
import State from "./State";

export default class DbDriver {

  private state: State;

  constructor(state: State) {
    this.state = state;
  }

  public getState() {
    return this.state;
  }

  public update(state: State) {
    this.state = {
      ...this.state,
      ...state
    }
  }

  public save(): Snapshot {
    return new Snapshot({
      ...this.state
    });
  }

  public restore(snapshot: Snapshot) {
    this.state = {
      ...snapshot.getState()
    };
  }
}