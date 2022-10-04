import React from 'react';
import { createPortal } from 'react-dom';
import style from './index.module.css';

const ERROR = 'Error';
const WARN = 'Warn';
const SUCCESS = 'Success';

function useAlert() {
  const [isAlertOpend, setIsAlertOpend] = React.useState(false);
  const ref = React.useRef();

  const openAlert = () => setIsAlertOpend(true);

  React.useEffect(() => {
    const $alert = document.getElementById('root-alert');
    ref.current = $alert;
  }, []);

  /**
   * @param {'Error' | 'Warn' | 'Success'} type
   * @param {string} title
   * @param {string} content
   * @returns
   */
  const Alert = ({ type, title, content }) => {
    const COLOR = type === ERROR ? 'red' : type === WARN ? 'yellow' : 'green';

    const AlertComponent = () => {
      React.useEffect(() => {
        setTimeout(() => setIsAlertOpend(false), 1000);
      }, []);

      return (
        <div className={`${style.AlertContainer} ${style[COLOR]}`} style={{ backgroundColor: COLOR }}>
          <div>{title}</div>
          <div>{content}</div>
        </div>
      );
    };

    if (ref.current && isAlertOpend) {
      return createPortal(<AlertComponent />, ref.current);
    }
  };

  return { Alert, openAlert };
}

export default useAlert;
