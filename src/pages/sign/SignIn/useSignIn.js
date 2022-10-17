import { useNavigate } from 'react-router-dom';
import { useMutation } from 'react-query';
import { useForm } from 'react-hook-form';
import { isEmail, isRequired } from '../../../utils/validation';
import { isVldError } from '../../../utils/validityError';

export const useSignIn = () => {
  const navigate = useNavigate();
  const mutaion = useMutation();
  const { register, handleSubmit, formState } = useForm({ defaultValues: { email: '', password: '' } });

  const reg = {
    email: { ...register('email', { isEmail: val => isEmail(val) || '이메일 형식이 올바르지 않습니다.' }) },
    password: { ...register('password', { validate: { isRequired: val => isRequired(val) || '비밀번호를 입력해야 합니다.' } }) },
  };

  const onSubmit = handleSubmit(async data => {
    mutaion.mutate();
  });

  const vldError = {
    email: isVldError(formState, 'email'),
    password: isVldError(formState, 'password'),
  };

  return { navigate, reg, onSubmit, vldError };
};
