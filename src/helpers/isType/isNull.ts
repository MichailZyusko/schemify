import * as _ from 'lodash';

export const checkIsNull = (data: any): data is null => {
  if (_.isNull(data)) {
    return true;
  }

  return false;
};
