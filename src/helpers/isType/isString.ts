import _ from 'lodash';

export const checkIsString = (data: any): data is string => {
  if (_.isString(data)) {
    return true;
  }

  return false;
};
