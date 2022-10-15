import { isEmptyObject } from './object';

/**
 * Check a error of only "one" validity
 * @param formstate
 * @param fieldName
 * @param ValidationName
 * @returns boolean
 */
export const isValidityError = (formstate, fieldName, ValidationName) => {
  const { dirtyFields, errors } = formstate;
  return !dirtyFields[fieldName] || !!errors[fieldName]?.types?.[ValidationName];
};

// [Temp] inputAmount는 지금 일일이 input 개수를 구해서 넣어주어야 함
/**
 * Check "all" error of form
 * @param formstate
 * @param inputAmount
 * @returns boolean
 */
export const isFormError = (formstate, inputAmount) => {
  const { dirtyFields, errors } = formstate;
  console.log(dirtyFields);
  console.log(errors);

  if (Object.keys(dirtyFields).length !== inputAmount) return true;
  else if (Object.keys(dirtyFields).length === inputAmount) {
    for (const name in dirtyFields) {
      if (dirtyFields[name] !== true) return true;
    }
  } else return !isEmptyObject(errors);
};
