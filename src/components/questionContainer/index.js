import React from 'react';
import { useSelector } from 'react-redux';
import style from './index.module.css';
import { Text } from '../element';

function QuestionContainer({ content }){

    return(
      <>
        <div className={style.question_container}>
            <div className={style.question_text}>
              <Text size="H4" content={'다음 문장을 번역하세요.'} />
            </div>
              <Text size="S" content={ content } />
        </div>

        <div className={style.input_box_container}>
            <div className={style.input_box}></div>
            <div className={style.input_box}></div>
        </div>
      </>  
    );
}

export default QuestionContainer;