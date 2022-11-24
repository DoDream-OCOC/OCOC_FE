import { useNavigate } from 'react-router-dom';
import { useMutation } from 'react-query';
import { useForm } from 'react-hook-form';
import { sign } from '../../../apis';
import { isEmail, isEngAndNum, isSpecialCharactors, isMinLength, isRequired } from '../../../utils/validation';
import { createVldErr } from '../../../utils/validityError';

const EMAIL = 'email';
const PW = 'password';
const CPW = 'confirmPassword';

export const useSignUp = () => {
  const navigate = useNavigate();
  const mutaion = useMutation({
    // [Todo] 이메일, 패스워드만 보내는 중
    mutationFn: data => sign.postJoinData({ id: data.email, password: data.password }),
    onSuccess: () => navigate('/'),
  });
  const { register, handleSubmit, getValues, formState } = useForm({ mode: 'onChange', defaultValues: { email: '', password: '', confirmPassword: '' }, criteriaMode: 'all' });

  const reg = {
    email: register(EMAIL, { validate: { isEmail: val => isEmail(val) || '이메일 형식이 올바르지 않습니다.' } }),
    password: register(PW, {
      validate: {
        isEngAndNum: val => isEngAndNum(val) || '영문자 조합이어야 합니다.',
        isSpecialCharactors: val => isSpecialCharactors(val) || '특수문자가 하나 이상 포함되어야 합니다.',
        isMinLength8: val => isMinLength(val, 8) || '8글자 이상이어야 합니다.',
      },
    }),
    confirmPassword: register(CPW, {
      validate: { isRequired: val => isRequired(val) || '비밀번호를 재입력해야 합니다.', isSame: val => val === getValues('password') || '비밀번호와 일치하지 않습니다.' },
    }),
  };

  const onSubmit = handleSubmit(async data => mutaion.mutate(data));

  const vldErr = createVldErr(formState, [EMAIL, PW, CPW]);

  return { reg, onSubmit, vldErr };
};
