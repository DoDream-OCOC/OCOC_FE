import React from 'react';
import { useSelector } from 'react-redux';
import { Text, BlankInput } from '../../element';
import style from './index.module.css';

function SentenceItem({ sentence }) {
  const { blankIndex } = useSelector(state => state.game.datasets[state.game.stage - 1]);
  const { id, text } = sentence;

  return (
    <>
      <span className={style.sentences_container}>
        <Text size="M" content={id === blankIndex + 2 ? <BlankInput /> : text} />
      </span>
    </>
  );
}

export default SentenceItem;
