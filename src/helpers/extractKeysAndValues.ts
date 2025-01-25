import { Camper } from 'shared/types';

type Result = {
  [key: string]: string | boolean;
};

export const extractKeysAndValues = (data: Camper, keys: string[]) => {
  const result: Result = {};

  keys.forEach((key) => {
    if (data[key] === true || typeof data[key] === 'string') {
      result[key] = data[key];
    }
  });

  return result;
};
