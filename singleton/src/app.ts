import { DbConnectionProvider } from "./DbConnectionProvider";


const dbConnection = DbConnectionProvider.getConnection();

console.log(dbConnection);

setTimeout(() => {
  const anotherConnection = DbConnectionProvider.getConnection();

  console.log(anotherConnection);
}, 3000);