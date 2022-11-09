import ButtonItem from './ButtonItem';

//map()으로 배열을 ButtonItem 컴포넌트로 가공
//ButtonItem에 text, id를 props로 전달
function Button({ keywords, onClick, isCorrect = null }) {
  return (
    <>
      <span>
        {keywords.map(keyword => (
          <ButtonItem keyword={keyword} key={keyword.id} onClick={onClick} isCorrect={isCorrect} />
        ))}
      </span>
    </>
  );
}

export default Button;
