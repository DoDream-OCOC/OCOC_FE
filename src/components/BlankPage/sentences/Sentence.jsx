import SentenceItem from './SentenceItem';

function Sentence({ sentences }) {
  return (
    <>
      <span>{sentences && sentences.map(sentence => <SentenceItem sentence={sentence} />)}</span>
    </>
  );
}

export default Sentence;
