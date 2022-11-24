import { useNavigate } from 'react-router-dom';
import { useMutation } from 'react-query';
import { useForm } from 'react-hook-form';
import { sign } from '../../../apis';
import { isEmail, isRequired } from '../../../utils/validation';
import { createVldErr } from '../../../utils/validityError';

const EMAIL = 'email';
const PW = 'password';

export const useSignIn = () => {
  const navigate = useNavigate();
  const mutaion = useMutation({
    mutationFn: data => sign.postLoginData(data),
    // [Todo] 확인해보기 -> 뒤로가기
    onSuccess: () => navigate(-1),
    onError: err => console.log(err),
  });
  const { register, handleSubmit, formState } = useForm({ defaultValues: { email: '', password: '' } });

  const reg = {
    email: { ...register(EMAIL, { isEmail: val => isEmail(val) || '이메일 형식이 올바르지 않습니다.' }) },
    password: { ...register(PW, { validate: { isRequired: val => isRequired(val) || '비밀번호를 입력해야 합니다.' } }) },
  };

  const onSubmit = handleSubmit(async data => mutaion.mutate({ loginId: data.email, loginPassword: data.password }));

  const vldErr = createVldErr(formState, [EMAIL, PW]);

  return { navigate, reg, onSubmit, vldErr };
};
