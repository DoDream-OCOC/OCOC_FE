import { useMutation } from 'react-query';
import { useForm } from 'react-hook-form';
import { isEmail, isEngAndNum, isSpecialCharactors, isMinLength, isRequired } from '../../../utils/validation';
import { isVldError } from '../../../utils/validityError';

export const useSignUp = () => {
  const mutaion = useMutation();
  const { register, handleSubmit, getValues, formState } = useForm({ mode: 'onChange', defaultValues: { email: '', password: '', confirmPassword: '' }, criteriaMode: 'all' });

  const reg = {
    email: register('email', { validate: { isEmail } }),
    password: register('password', { validate: { isEngAndNum, isSpecialCharactors, isMinLength8: value => isMinLength(value, 8) } }),
    confirmPassword: register('confirmPassword', { validate: { isRequired, isSame: value => value === getValues('password') } }),
  };

  const onSubmit = handleSubmit(async data => {
    mutaion.mutate();
  });

  const vldError = {
    email: isVldError(formState, 'email'),
    password: isVldError(formState, 'password'),
    confirmPassword: isVldError(formState, 'confirmPassword'),
  };

  return { reg, onSubmit, vldError };
};
