import { useMutation } from 'react-query';
import { useForm } from 'react-hook-form';
import { isEmail, isEngAndNum, isSpecialCharactors, isMinLength, isRequired } from '../../../utils/validation';
import { isVldError } from '../../../utils/validityError';

export const useSignUp = () => {
  const mutaion = useMutation();
  const { register, handleSubmit, getValues, formState } = useForm({ mode: 'onChange', defaultValues: { email: '', password: '', confirmPassword: '' }, criteriaMode: 'all' });

  const reg = {
    email: register('email', { validate: { isEmail: val => isEmail(val) || '이메일 형식이 올바르지 않습니다.' } }),
    password: register('password', {
      validate: {
        isEngAndNum: val => isEngAndNum(val) || '영문자 조합이어야 합니다.',
        isSpecialCharactors: val => isSpecialCharactors(val) || '특수문자가 하나 이상 포함되어야 합니다.',
        isMinLength13: val => isMinLength(val, 13) || '8글자 이상이어야 합니다.',
      },
    }),
    confirmPassword: register('confirmPassword', { validate: { isRequired: '비밀번호를 재입력해야 합니다.', isSame: val => val === getValues('password') || '비밀번호와 일치하지 않습니다.' } }),
  };

  const onSubmit = handleSubmit(async data => {
    mutaion.mutate();
  });

  const vldError = {
    email: isVldError(formState, 'email'),
    password: isVldError(formState, 'password'),
    confirmPassword: isVldError(formState, 'confirmPassword'),
  };

  return { reg, onSubmit, vldError, formState };
};
