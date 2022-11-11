import SentenceItem from './SentenceItem';

function Sentence({ sentences }) {
  return (
    <>
      <span>{sentences && sentences.map(sentence => <SentenceItem sentence={sentence} key={sentence.id} />)}</span>
    </>
  );
}

export default Sentence;
