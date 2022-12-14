import React from 'react';
import { createPortal } from 'react-dom';
import style from './index.module.css';

/**
 * Modal hook
 * ex)
 * const { Modal, openModal, closeModal } = useModal();
 * return (
 *   ...
 *   <Modal>
 *    <div onclick={closeModal} /> *Need
 *   </Modal> *Need
 *   <button style={{ marginTop: '500px' }} onClick={openModal} />
 *   ...
 * );
 * @returns Modal, openModal, closeModal
 */
function useModal() {
  const [isModalOpened, setIsModalOpened] = React.useState(false);
  const ref = React.useRef();

  const openModal = () => setIsModalOpened(true);
  const closeModal = () => setIsModalOpened(false);

  React.useEffect(() => {
    const $modal = document.getElementById('root-modal');
    ref.current = $modal;
  }, []);

  const Modal = React.useCallback(
    ({ children }) => {
      const ModalComponent = () => {
        return (
          <div className={style.modalContainer}>
            <div className={style.children}>{children}</div>
          </div>
        );
      };

      if (ref.current && isModalOpened) {
        return createPortal(
          <div id={style.bg_blur}>
            <ModalComponent />
          </div>,
          ref.current,
        );
      }
    },
    [isModalOpened],
  );

  return { Modal, openModal, closeModal };
}

export default useModal;
