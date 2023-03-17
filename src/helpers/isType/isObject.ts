import * as _ from 'lodash';

export const checkIsObject = (data: any): data is object => {
  if (_.isPlainObject(data)) {
    return true;
  }

  return false;
};
