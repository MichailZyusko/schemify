import _ from 'lodash';

export const checkIsObject = (data: any): data is object => {
  if (_.isObject(data)) {
    return true;
  }

  return false;
};
