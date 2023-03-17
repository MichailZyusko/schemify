import * as _ from 'lodash';

export const checkIsArray = (data: any): data is [] => {
  if (_.isArray(data)) {
    return true;
  }

  return false;
};
