import { Entity, Schema } from "./mod.ts";

Deno.test("defineBasicSchema", function (): void {
  @Entity()
  class User {
    id!: number;

    name!: string;

    passwordHash!: string;
  }

  @Schema({
    entities: [User], 
  })
  class AppSchema {}

  // TODO initialize schema
});