export const isEmpty = obj => {
  return Object.keys(obj).every(item => {
    return !!isEmpty(obj[item]);
  });
};
