import _ from 'lodash';

export const checkIsDate = (data: any): data is Date => {
  if (_.isDate(data)) {
    return true;
  }

  return false;
};
