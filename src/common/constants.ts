export const ENTITY_METADATA = "__entity_metadata__";
export const SCHEMA_METADATA = {
  IMPORTS: "imports" as "imports",
  EXPORTS: "exports" as "exports",
  ENTITIES: "entities" as "entities",
};
export const SCHEMA_METADATA_KEYS = [
  ...Object.values(SCHEMA_METADATA),
];
export type SCHEMA_METADATA_KEYS_TYPE =
  typeof SCHEMA_METADATA[keyof typeof SCHEMA_METADATA];
export const DEFINITION_TYPE = {
  ENTITY: "__entity__",
  SCHEMA: "__schema__",
};
