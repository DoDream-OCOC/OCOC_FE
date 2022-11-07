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

      <div className={style.input_box_container}>
        <div className={style.input_box}></div>
        <div className={style.input_box}></div>
      </div>
    </>
  );
}

export default QuestionContainer;
