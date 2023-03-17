/* eslint-disable import/extensions */
import { getAverageSchema, getObjectSchema, getSchemaWithTypesFrequency } from './src/helpers/index';

export { Types } from './src/enums/types';

export const getAverageSchemaFromArray = (arr: any[]) => {
  const arrayWithTypes = arr.map(getObjectSchema);
  const schemaWithTypesFrequency = getSchemaWithTypesFrequency(arrayWithTypes);
  const averageSchema = getAverageSchema(schemaWithTypesFrequency);

  return averageSchema;
};
