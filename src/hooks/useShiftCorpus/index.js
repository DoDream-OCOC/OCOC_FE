import { useSelector } from 'react-redux';

function useShiftCorpus() {
  const aCorpus = useSelector(state => state.study.words.shift());
  return aCorpus;
}

export default useShiftCorpus;
