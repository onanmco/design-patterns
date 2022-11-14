import DbDriver from "./DbDriver";
import Snapshot from "./Snapshot";

export default class TransactionManager {

  private snapshots: Snapshot[];
  private dbDriver: DbDriver;

  constructor(dbDriver: DbDriver) {
    this.snapshots = [];
    this.dbDriver = dbDriver;
  }

  public beginTransaction() {
    this.snapshots.push(this.dbDriver.save());
  }

  public commit() {
    this.beginTransaction();
  }

  public rollback() {
    if (this.snapshots.length === 0) {
      return;
    }

    const latestSnapshot = this.snapshots.pop();

    console.log("Rollnack in progress.");
    this.dbDriver.restore(latestSnapshot!);
  }
}