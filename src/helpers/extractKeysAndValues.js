export const extractKeysAndValues = (data, keys) => {
  const result = {};

  keys.forEach((key) => {
    if (data[key]) {
      result[key] = data[key];
    }
  });

  return result;
};
