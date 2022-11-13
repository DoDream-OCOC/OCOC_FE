import React from 'react';
import style from './index.module.css';
import { Text, Empty } from '../../components/element';

function QuestionContainer({ content }) {
  return (
    <>
      <div className={style.question_container}>
        <Empty size="0.6rem" />
        <Text size="S" content={content} />
      </div>
    </>
  );
}

export default QuestionContainer;
