import React from 'react';
import { useSelector } from 'react-redux';
import { Text } from '../../element';
import style from './index.module.css';

function SentenceItem({ sentence }) {
  const { id, text } = sentence;

  return (
    <>
      <span className={style.sentences_container}>
        <Text size="S" content={text} />
      </span>
    </>
  );
}

export default SentenceItem;
