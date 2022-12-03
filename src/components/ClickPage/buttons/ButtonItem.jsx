import React from 'react';
import { Text } from '../../../components/element';
import style from './index.module.css';

function ButtonItem({ keyword, onClick, isCorrect, fadeInOut }) {
  const { id, text } = keyword;
  const BTN_DEFAULT_STYLE = fadeInOut === false ? 'button_keyword' : 'button_fadeIn';
  const BTN_STYLE = isCorrect === null ? '' : isCorrect ? 'button_correct' : 'button_wrong';

  return (
    <>
      <button
        className={`${style[BTN_DEFAULT_STYLE]} ${style[BTN_STYLE]}`}
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
