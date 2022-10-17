export const isEmptyObject = obj => {
  return obj.constructor === Object && Object.keys(obj).length === 0;
};
