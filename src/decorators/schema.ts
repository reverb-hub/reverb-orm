import { SCHEMA_METADATA, SCHEMA_METADATA_KEYS, SCHEMA_METADATA_KEYS_TYPE, DEFINITION_TYPE } from "../common/constants.ts";

export interface Type<T> extends Function {
  new (...args: any[]): T;
}

export interface SchemaDefinition {
  [SCHEMA_METADATA.ENTITIES]?: Type<any>[],
}

export function Schema(definition: SchemaDefinition): ClassDecorator {
  const propsKeys = (Object.keys(definition) as unknown) as Array<keyof SchemaDefinition>;
  validateSchemaKeys(propsKeys);

  return (target: Function) => {
    Reflect.defineMetadata(DEFINITION_TYPE.SCHEMA, true, target);
    for (const property in definition) {
      if (definition.hasOwnProperty(property)) {
        Reflect.defineMetadata(property, (definition as any)[property], target);
      }
    }
  }
}

export const INVALID_SCHEMA_DEFINITION_MESSAGE = (
  text: TemplateStringsArray,
  property: string,
) => `Invalid property '${property}' passed into the @Schema() decorator.`;

export function validateSchemaKeys(keys: SCHEMA_METADATA_KEYS_TYPE[]) {
  const validateKey = (key: SCHEMA_METADATA_KEYS_TYPE) => {
    if (SCHEMA_METADATA_KEYS.includes(key)) {
      return;
    }
    throw new Error(INVALID_SCHEMA_DEFINITION_MESSAGE`${key}`);
  };
  keys.forEach(validateKey);
}