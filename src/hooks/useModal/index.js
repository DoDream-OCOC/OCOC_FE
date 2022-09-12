import React from 'react';

// [Todo] Add useCallback
function useModal() {
  const [isModalOpened, setIsModalOpened] = React.useState(false);
  const ref = React.useRef();

  const openModal = () => setIsModalOpened(true);
  const closeModal = () => setIsModalOpened(false);

  React.useEffect(() => {
    if (document) {
      const dom = document.getElementById('root-modal');
      console.log(dom);
      ref.current = dom;
    }
  }, []);

  if (ref.current && isModalOpened) {
    return React.createPortal(
      <div style={{ position: 'fixed', width: '200px', height: '200px', backgroundColor: 'tomato' }}>
        <div onClick={() => closeModal()} />
      </div>,
      ref.current,
    );
  }

  return { openModal, closeModal };
}

export default useModal;
