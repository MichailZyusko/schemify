import * as _ from 'lodash';

export const checkIsNumber = (data: any): data is number => {
  if (_.isNumber(data)) {
    return true;
  }

  return false;
};
