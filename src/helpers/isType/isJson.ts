import * as _ from 'lodash';

export const checkIsJSON = (data: any): data is string => {
  if (!_.isString(data)) return false;

  try {
    const res = JSON.parse(data);
    const type = Object.prototype.toString.call(res);
    return type === '[object Object]' || type === '[object Array]';
  } catch (error) {
    return false;
  }
};
