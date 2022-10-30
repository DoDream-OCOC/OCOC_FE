import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { useMutation } from 'react-query';
import { gameSlice } from '../../../../store/slices';
import { study, question } from '../../../../apis/index';

export const useMainCard = () => {
  const navigate = useNavigate();
  const studyId = useSelector(state => state.game.studyId);
  const dispatch = useDispatch();
  const mutation = useMutation({
    mutationFn: async () => {
      // [Todo] 잘 되는지 확인 필요
      await study.postStudy().then(res => dispatch(gameSlice.actions.setStudyId(res.data.studyId)));
      await question.getQuestion(studyId, 1).then(res => dispatch(gameSlice.actions.setAllCorpus(res.data.data)));
    },
    onSuccess: () => navigate('/play-game'),
    // [Todo] alert 붙여주기
    onError: err => console.log(err),
  });

  const letsPlayGame = () => mutation.mutate();

  return { letsPlayGame };
};
