import { Types } from './enums/types.js';
import {
  checkIsArray,
  checkIsBoolean, checkIsNull, checkIsNumber, getArraySchema,
  checkIsObject, checkIsString, checkIsUndefined, getObjectSchema,
} from './helpers/index.js';
import { TConstructorProps } from './types/index.js';

export class Schemator {
  private options?: any;

  constructor(options?: TConstructorProps) {
    this.options = {
      ...options,
      types: Types,
    };
  }

  public schemify(data: any): Types | Record<keyof typeof data, any> {
    const { types } = this.options;

    // check primitive data types
    if (checkIsNumber(data)) {
      return types.NUMBER;
    }

    if (checkIsString(data)) {
      return types.STRING;
    }

    if (checkIsBoolean(data)) {
      return types.BOOLEAN;
    }

    if (checkIsNull(data)) {
      return types.NULL;
    }

    if (checkIsUndefined(data)) {
      return types.UNDEFINED;
    }

    // check non-primitive data types
    if (checkIsObject(data)) {
      return getObjectSchema(data);
    }

    if (checkIsArray(data)) {
      return getArraySchema(data);
    }

    return Types.UNDEFINED;
  }
}
