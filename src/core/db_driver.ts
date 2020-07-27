import { QueryResult } from "./query_result.ts";

export interface DBDriver {
  query(query: string, ...args: any[]): Promise<QueryResult>;
  connect(): Promise<void>;
  disconnect(): Promise<void>;
}
