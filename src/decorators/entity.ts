import { ENTITY_METADATA, DEFINITION_TYPE } from "../common/constants.ts";

export interface EntityConfig {
  table?: string;
}

export function Entity(config?: EntityConfig): ClassDecorator {

  return (target: Function) => {
    Reflect.defineMetadata(ENTITY_METADATA, config, target);
    Reflect.defineMetadata(DEFINITION_TYPE.ENTITY, true, target);
  }
}
