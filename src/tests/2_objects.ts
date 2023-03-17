/* eslint-disable no-console */

import { Schemator } from '../index.js';

const schemator = new Schemator();

const obj = {
  number: 1,
  string: '',
  null: null,
  undefined,
  boolean: false,
  obj: {
    number: 2,
    string: 'string',
    null: null,
    undefined,
    boolean: false,
    obj: {
      number: 3,
      string: 'any string',
      null: null,
      undefined,
      boolean: true,
    },
  },
};
const objType = schemator.schemify(obj);
console.dir(objType, { depth: null });
