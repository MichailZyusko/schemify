import * as _ from 'lodash';

export const checkIsBoolean = (data: any): data is boolean => {
  if (_.isBoolean(data)) {
    return true;
  }

  return false;
};
