import React from 'react';

import style from './index.module.css';

// [Todo] props 안 넣으면 에러발생시키게 하기 -> TS밖에 답이 없나

/**
 * Text component
 * @param {L, M-Bold, M, M-Light, S-Bold, S} size text size
 * @param {Text-1, Text-2} color text's color
 * @param {String} text text's content
 * @returns Common text
 */
export const Text = ({ size = 'M', color = 'Text-2', text, ...props }) => {
  return (
    <span className={style[size]} style={{ color: `var(--${color})` }} {...props}>
      {text}
    </span>
  );
};

/**
 * Empty component
 * @param {rem} size Height size, must use 'rem'
 * @returns Empty
 */
export const Empty = ({ size }) => {
  return <div style={{ height: size }} />;
};

export const Button = ({ ...props }) => {
  return (
    <button id={style.button} {...props}>
      시작하기
    </button>
  );
};
