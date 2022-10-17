import { isEmptyObject } from './object';

/**
 * Check all error of only "one" field
 * @param formstate
 * @param fieldName
 * @returns boolean
 */
export const isVldError = (formstate, fieldName) => {
  const { errors } = formstate;
  return !!errors[fieldName];
};

// [Temp] inputAmount는 지금 일일이 input 개수를 구해서 넣어주어야 함
/**
 * Check "all" error of a form
 * @param formstate
 * @param inputAmount
 * @returns boolean
 */
export const isFormError = (formstate, inputAmount) => {
  const { dirtyFields, errors } = formstate;

  if (Object.keys(dirtyFields).length !== inputAmount) return true;
  else if (Object.keys(dirtyFields).length === inputAmount) {
    for (const name in dirtyFields) {
      if (dirtyFields[name] !== true) return true;
    }
  } else return !isEmptyObject(errors);
};
