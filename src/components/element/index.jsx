import React from 'react';
import PropTypes from 'prop-types';

import { ReactComponent as Loading } from '../../assets/loading/ellipsis.svg';

import style from './index.module.css';

/**
 * Text component
 * @param {H1, H2, H3, H4, H5, B1, B2, B3} size text size
 * @param {Text-1, Text-2} color text's color
 * @param {string} content text's content
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

/**
 * Button component
 * @param {boolean} isDisabled
 * @param {boolean} isLoading
 * @param {string} content button's content
 * @returns Button
 */
export const Button = ({ isDisabled = false, isLoading = false, content, ...props }) => {
  const disabled = isDisabled || isLoading;
  return (
    <button className={style.button} style={{ opacity: disabled ? '0.5' : '1' }} disabled={disabled} {...props}>
      {!isLoading && content}
      {isLoading && <Loading />}
    </button>
  );
};

/**
 * Graiding button component
 * @param {boolean} isDisabled
 * @param {boolean} isGrading
 * @param {string} content button's content
 * @returns Button
 */
export const GradingButton = ({ isDisabled = false, isGrading = false, content, ...props }) => {
  const disabled = isDisabled || isGrading;
  return (
    <button className={style.button} style={{ opacity: disabled ? '0.5' : '1' }} disabled={disabled} {...props}>
      {!isGrading ? content : '채점중입니다'}
      {isGrading && <Loading />}
    </button>
  );
};

// Types -> 적용이 안되네?
Text.propTypes = {
  size: PropTypes.oneOf(['H1', 'H2', 'H3', 'H4', 'H5', 'B1', 'B2', 'B3']),
  color: PropTypes.oneOf(['Text-1, Text-2']),
  content: PropTypes.string,
};
