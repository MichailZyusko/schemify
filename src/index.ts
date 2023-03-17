import { getAverageSchema, getObjectSchema, getSchemaWithTypesFrequency } from './helpers/index.js';

export const getAverageSchemaFromArray = (arr: any[]) => {
  const arrayWithTypes = arr.map(getObjectSchema);
  const schemaWithTypesFrequency = getSchemaWithTypesFrequency(arrayWithTypes);
  const averageSchema = getAverageSchema(schemaWithTypesFrequency);

  return averageSchema;
};
