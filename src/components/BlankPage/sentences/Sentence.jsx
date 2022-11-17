import SentenceItem from './SentenceItem';

function Sentence({ sentences, blankText, onChange }) {
  return (
    <>
      <span>{sentences && sentences.map(sentence => <SentenceItem sentence={sentence} key={sentence.id} blankText={blankText} onChange={onChange} />)}</span>
    </>
  );
}

export default Sentence;
