import DbDriver from "./DbDriver";
import TransactionManager from "./TransactionManager";

const connection = new DbDriver({});
const transactionManager = new TransactionManager(connection);

console.log("Starting to a transaction.");
transactionManager.beginTransaction();
console.log("Transaction started. Current state: ", connection.getState());


console.log("Adding a new data to db.");
connection.update({
  1: {
    name: "Cem",
    lastName: "Onan"
  }
});

console.log("Current state after insertion:");
console.log(connection.getState());

console.log("Committing the transaction.");
transactionManager.commit();

console.log("Starting to another transaction.");
transactionManager.beginTransaction();
console.log("Current state: ", connection.getState());

console.log("Adding another record to the db:");
connection.update({
  2: {
    name: "Mustafa",
    lastName: "Onan"
  }
});

console.log("Current state after 2nd insertion:");
console.log(connection.getState());

console.log("Applying rollback:");
transactionManager.rollback();

console.log("Current state after rollback:");
console.log(connection.getState());