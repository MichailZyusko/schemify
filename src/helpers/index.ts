import { Types } from '../enums/types.js';
import { checkIsArray } from './isType/isArray.js';
import { checkIsBoolean } from './isType/isBoolean.js';
import { checkIsDate } from './isType/isDate.js';
import { checkIsJSON } from './isType/isJson.js';
import { checkIsNull } from './isType/isNull.js';
import { checkIsNumber } from './isType/isNumber.js';
import { checkIsObject } from './isType/isObject.js';
import { checkIsString } from './isType/isString.js';
import { checkIsUndefined } from './isType/isUndefined.js';

export const schemify = (data: any): Types => {
  // check non-primitive data types
  if (checkIsObject(data)) {
    return Types.Object;
  }

  if (checkIsArray(data)) {
    return Types.Array;
  }

  if (checkIsDate(data)) {
    return Types.Date;
  }

  if (checkIsJSON(data)) {
    return Types.JSON;
  }

  // check primitive data types
  if (checkIsNumber(data)) {
    return Types.Number;
  }

  if (checkIsString(data)) {
    return Types.String;
  }

  if (checkIsBoolean(data)) {
    return Types.Boolean;
  }

  if (checkIsNull(data)) {
    return Types.Null;
  }

  if (checkIsUndefined(data)) {
    return Types.Undefined;
  }

  return Types.Undefined;
};

export const getObjectSchema = (data: object) => {
  const entries = Object.entries(data);
  const entriesWithTypes = entries.map(([key, value]) => [key, schemify(value)]);

  return Object.fromEntries(entriesWithTypes);
};

export const getSchemaWithTypesFrequency = (arr: any[]) => arr
  .reduce((acc: Record<string, { [k in Types]: number }>, cur: Record<string, Types>) => {
    Object.entries(cur).forEach(([key, val]) => {
      if (acc?.[key]?.[val]) {
        acc[key] = {
          ...acc[key],
          [val.toString()]: acc[key][val] + 1,
        };
      } else {
        acc[key] = {
          ...acc[key],
          [val.toString()]: 1,
        };
      }
    });

    return acc;
  }, {});

export const getAverageSchema = (obj: Record<string, { [k in Types | string]: number }>) => {
  const entries = Object.entries(obj).map(([key, value]) => [
    key,
    Object.keys(value).reduce((a, b) => (value[a] > value[b] ? a : b)),
  ]);

  return Object.fromEntries(entries);
};
