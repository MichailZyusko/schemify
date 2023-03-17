/* eslint-disable no-console */

import { getAverageSchemaFromArray } from '../index.js';

const data = [
  { user: 'string', age: 1 },
  { user: null, age: null },
  { user: null, age: null },
  { user: 'string', age: 1 },
  { firstName: 'string', age: 1 },
];

const arrayType = getAverageSchemaFromArray(data);
console.table(arrayType);
