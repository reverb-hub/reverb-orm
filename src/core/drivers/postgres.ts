import { DBDriver } from "../db_driver.ts";
import { QueryResult } from "../query_result.ts";
import { Client } from "../../../deps.ts";

export class PostgresDriver implements DBDriver {
  constructor(private readonly client: Client) {}

  async query(query: string, ...args: any[]): Promise<QueryResult> {
    return this.client.query(query, args);
  }

  async connect(): Promise<void> {
    await this.client.connect();
  }

  async disconnect(): Promise<void> {
    await this.client.end();
  }
}
