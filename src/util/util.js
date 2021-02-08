export const _isEmpty = obj => {
  return Object.keys(obj).every(item => {
    return obj[item] === "" || obj[item] === null || obj[item] === undefined;
  });
};
