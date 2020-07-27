import { Entity, Schema, Deployment } from "./mod.ts";

Deno.test("defineBasicSchema", async function (): Promise<void> {
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

  const deployment = new Deployment(AppSchema, {
    hostname: Deno.env.get("DB_HOST") || "127.0.0.1",
    user: "reverb_orm",
    database: "reverb_orm",
    password: "reverb_orm",
    port: 5432,
  });

  await deployment.connect();

  await deployment.disconnect();
});
