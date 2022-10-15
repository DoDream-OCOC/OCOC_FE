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
    email: { ...register('email', { validate: { isEmail } }) },
    password: { ...register('password', { validate: { isRequired } }) },
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
