import React from 'react';
import { createPortal } from 'react-dom';
import style from './index.module.css';

/**
 * Modal hook
 * @param {JSX.Element} component
 * @returns { Render, openModal, closeModal }
 * ex)
 * const { Render, openModal } = useModal();
 * return (
 *   ...
 *   <Render /> *Need
 *   <button style={{ marginTop: '500px' }} onClick={openModal} />
 *   ...
 * );
 */
function useModal(component) {
  const [isModalOpened, setIsModalOpened] = React.useState(false);
  const ref = React.useRef();

  const openModal = () => setIsModalOpened(true);
  const closeModal = () => setIsModalOpened(false);

  React.useEffect(() => {
    if (document) {
      const $modal = document.getElementById('root-modal');
      ref.current = $modal;
    }
  }, []);

  const Render = () => {
    const ModalComponent = () => {
      return (
        <div className={style.modalContainer}>
          <div className={style.closeBtn} onClick={() => closeModal()} />
          {component}
        </div>
      );
    };

    if (ref.current && isModalOpened) {
      return createPortal(<ModalComponent />, ref.current);
    }
  };

  return { Render, openModal, closeModal };
}

export default useModal;
