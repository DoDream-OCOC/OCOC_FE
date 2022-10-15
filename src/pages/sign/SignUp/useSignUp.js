import { useMutation } from 'react-query';
import { useForm } from 'react-hook-form';
import { isEngAndNum, isSpecialCharactors, isMinLength } from '../../../utils/validation';

export const useSignUp = () => {
  const mutaion = useMutation();
  const { register, handleSubmit, getValues } = useForm({ mode: 'onChange', defaultValues: { password: '' } });

  const onSubmit = handleSubmit(async data => {
    mutaion.mutate();
  });

  const reg = {
    password: {
      ...register('password', {
        validate: {
          isEngAndNum,
          isSpecialCharactors,
          isMinLength8: value => isMinLength(value, 8),
        },
      }),
    },
    confirmPassword: {
      ...register('confirmPassword', {
        validate: {
          // [Todo] getValues 잘 작동 되나 확인 필요
          isSame: value => value === getValues('password'),
        },
      }),
    },
  };

  return { reg, onSubmit };
};
