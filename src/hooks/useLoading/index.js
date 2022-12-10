import React from 'react';
import { createPortal } from 'react-dom';
import { ReactComponent as LoadingSVG } from '../../assets/loading/ellipsis.svg';
import style from './index.module.css';

function useLoading() {
  const ref = React.useRef();

  React.useEffect(() => {
    const $loading = document.getElementById('root-loading');
    ref.current = $loading;
  }, []);

  const Loading = React.useCallback(({ isLoading, ...props }) => {
    if (ref.current && isLoading)
      return createPortal(
        <div id={style.bg_blur}>
          <LoadingSVG id={style.loading} {...props} />
        </div>,
        ref.current,
      );
  }, []);
  return { Loading };
}

export default useLoading;
