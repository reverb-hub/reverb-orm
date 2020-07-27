import { Type } from "../decorators/schema.ts";
import { Client, ConnectionOptions } from "../../deps.ts";
import { DBDriver } from "./db_driver.ts";
import { PostgresDriver } from "./drivers/postgres.ts";

export class Deployment {
  private readonly driver: DBDriver;

  constructor(
    private schema: Type<any>,
    connection: Client | ConnectionOptions,
  ) {
    let client: Client;
    if (connection instanceof Client) {
      client = connection;
    } else {
      client = new Client(connection);
    }
    this.driver = new PostgresDriver(client);
  }

  async connect(): Promise<void> {
    await this.driver.connect();
  }

  async disconnect(): Promise<void> {
    await this.driver.disconnect();
  }
}
