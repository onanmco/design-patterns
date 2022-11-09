export class DbConnectionProvider {
  private static dbConnection: string;

  private constructor() {}

  public static getConnection(): string {
    if (!DbConnectionProvider.dbConnection) {
      DbConnectionProvider.dbConnection = "Db connection has been established on " + new Date().toISOString();
    }
    return this.dbConnection;
  }
}