import _ from 'lodash';

export const checkIsUndefined = (data: any): data is undefined => {
  if (_.isUndefined(data)) {
    return true;
  }

  return false;
};
