import React from 'react';
import { useCallback } from 'react';
import { useSelector } from 'react-redux';
import { Text } from '../../element';
import style from './index.module.css';

function SentenceItem({ sentence, blankText, onChange }) {
  const { blankIndex } = useSelector(state => state.game.datasets[state.game.stage - 1]);
  const { id, text } = sentence;

  return (
    <>
      <span className={style.sentences_container}>
        <Text size="M" content={id === blankIndex ? <input value={blankText} onChange={onChange} className={style.blank_container}></input> : text} />
      </span>
    </>
  );
}

export default SentenceItem;
