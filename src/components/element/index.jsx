import React from 'react';

import style from './index.module.css';

// [Todo] props 안 넣으면 에러발생시키게 하기 -> TS밖에 답이 없나

/**
 * Text component
 * @param {H1, H2, H3, H4, H5, B1, B2, B3} size text size
 * @param {Text-1, Text-2} color text's color
 * @param {String} content text's content
 * @returns Common text
 */
export const Text = ({ size = 'B1', color = 'Text-2', content, ...props }) => {
  return (
    <span className={style[size]} style={{ color: `var(--${color})` }} {...props}>
      {content}
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

// [Todo] 버튼 disabled 만들기
export const Button = ({ ...props }) => {
  return (
    <button id={style.button} {...props}>
      시작하기
    </button>
  );
};
