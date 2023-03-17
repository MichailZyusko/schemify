import { Schemator } from '../../index.js';

export const getArraySchema = (data: Array<unknown>) => {
  const schemator = new Schemator();

  const entries = Object.entries(data);
  const entriesWithTypes = entries.map(([key, value]) => [key, schemator.schemify(value)]);

  return Object.fromEntries(entriesWithTypes);
};
