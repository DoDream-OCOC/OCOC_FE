// Usually used for validation.
const email = /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i;
const engAndNum = /(?=.*[A-Za-z])(?=.*\d)/;
const specialCharacters = /(?=.*[$@$!%*#?&])/;

export const isRequired = value => {
  return value.length > 0;
};

export const isMin = (value, criterion) => {
  return Number(value) >= criterion;
};

export const isMax = (value, criterion) => {
  return Number(value) <= criterion;
};

export const isMinLength = (value, criterion) => {
  return value.length >= criterion;
};

export const isMaxLength = (value, criterion) => {
  return value.length <= criterion;
};

export const isEngAndNum = value => {
  return engAndNum.test(value);
};

export const isSpecialCharactors = value => {
  return specialCharacters.test(value);
};

export const isEmail = value => {
  return email.test(value);
};

export const isPattern = (value, regExp) => {
  return regExp.test(value);
};
