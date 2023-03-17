/* eslint-disable no-console */

import { Schemator } from '../index.js';

const schemator = new Schemator();

const array = [1, 2, 3];
const arrayType = schemator.schemify(array);
console.dir(arrayType, { depth: null });
