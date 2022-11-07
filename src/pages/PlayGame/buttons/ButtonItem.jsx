import { Text } from '../../../components/element';
import style from './index.module.css';

function ButtonItem({ keyword, onClick, isCorrect }) {
  const { id, text } = keyword;
  const BTN_STYLE = isCorrect === null ? '' : isCorrect ? 'button_correct' : 'button_wrong';

  return (
    <>
      <button
        className={`${style.button_keyword} ${style[BTN_STYLE]}`}
        onClick={() => {
          onClick(id);
        }}>
        <div className={style.button_keyword_text}>
          <Text size="S" content={text} />
        </div>
      </button>
    </>
  );
}

export default ButtonItem;
