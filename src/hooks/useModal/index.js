import React from 'react';
import { createPortal } from 'react-dom';
import style from './index.module.css';
import { AiOutlineCloseCircle } from 'react-icons/ai';

/**
 * Modal hook
 * ex)
 * const { Modal, openModal } = useModal();
 * return (
 *   ...
 *   <Modal /> *Need
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

  const Modal = ({ children }) => {
    const ModalComponent = () => {
      return (
        <div className={style.modalContainer}>
          {/* [Todo] 모달 창은 가운데 디폴트로 보여주게 하기 */}
          {/* [Todo] 모달 창 윤곽 및 패딩은 디폴트로 설정하기 */}
          {/* [Todo] X버튼 UI 개선 */}
          <AiOutlineCloseCircle className={style.closeBtn} onClick={() => closeModal()} />
          <div className={style.children}>{children}</div>
        </div>
      );
    };

    if (ref.current && isModalOpened) {
      return createPortal(<ModalComponent />, ref.current);
    }
  };

  return { Modal, openModal, closeModal };
}

export default useModal;
