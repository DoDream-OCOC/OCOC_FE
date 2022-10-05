import React from 'react';
import { createPortal } from 'react-dom';
import { Text } from '../../components/element';
import { ReactComponent as WarnIcon } from '../../assets/icons/warnIcon.svg';
import { ReactComponent as SuccessIcon } from '../../assets/icons/successIcon.svg';
import { ReactComponent as ErrorIcon } from '../../assets/icons/errorIcon.svg';
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
   * @param {string} content
   * @returns
   */
  const Alert = ({ type, content }) => {
    const COLOR = type === ERROR ? 'red' : type === WARN ? 'yellow' : 'green';
    const TITLE = type === ERROR ? '에러' : type === WARN ? '주의' : '성공';

    const AlertComponent = () => {
      React.useEffect(() => {
        setTimeout(() => setIsAlertOpend(false), 1500);
      }, []);

      return (
        <div className={`${style.AlertContainer} ${style[COLOR]}`} style={{ backgroundColor: COLOR }}>
          {type === ERROR ? <ErrorIcon /> : type === WARN ? <WarnIcon /> : <SuccessIcon />}
          <div className={style.text}>
            <Text size="B2" content={TITLE} />
            <Text size="B3" content={content} />
          </div>
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
