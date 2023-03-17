/* eslint-disable no-console */

import { Schemator } from '../index.js';
import { Types } from '../enums/types.js';

const schemator = new Schemator();

// Test numbers types
const number = 1;
const numberType = schemator.schemify(number);
console.log(numberType, numberType === Types.NUMBER); // true

// Test strings types
const string = '1';
const stringType = schemator.schemify(string);
console.log(stringType, stringType === Types.STRING); // true

// Test booleans types
const boolean = true;
const booleanType = schemator.schemify(boolean);
console.log(booleanType, booleanType === Types.BOOLEAN); // true

// Test nulls types
const nulls = null;
const nullType = schemator.schemify(nulls);
console.log(nullType, nullType === Types.NULL); // true

// Test undefineds types
const undefineds = undefined;
const undefinedType = schemator.schemify(undefineds);
console.log(undefinedType, undefinedType === Types.UNDEFINED); // true
