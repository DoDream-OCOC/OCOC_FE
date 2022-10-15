import { useNavigate } from 'react-router-dom';
import { useMutation } from 'react-query';
import { useForm } from 'react-hook-form';
import { isEmail, isRequired } from '../../../utils/validation';

export const useSignIn = () => {
  const navigate = useNavigate();
  const mutaion = useMutation();
  const { register, handleSubmit } = useForm({ defaultValues: { email: '', password: '' } });

  const onSubmit = handleSubmit(async data => {
    mutaion.mutate();
  });

  const reg = {
    email: { ...register('email', { validate: { isEmail } }) },
    password: { ...register('password', { validate: { isRequired } }) },
  };

  return { navigate, reg, onSubmit };
};
