import React, { cloneElement, isValidElement, ReactNode, useCallback, useState } from 'react';

import Modal from '../components/molecules/Modal';

interface UseModal {
  children: ReactNode;
  handleOpendCallback?: VoidFunction;
  handleClosedCallback?: VoidFunction;
}

const useModal = ({ handleClosedCallback, handleOpendCallback, children }: UseModal) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = useCallback(() => {
    setIsOpen(true);
  }, []);

  const handleClose = useCallback(() => {
    setIsOpen(false);
  }, []);

  const renderModal = () => (
    <Modal isOpen={isOpen} onOpened={handleClosedCallback} onClosed={handleOpendCallback} onClose={handleClose}>
      {isValidElement(children)
        ? cloneElement(children, {
            onClose: handleClose,
          })
        : children}
    </Modal>
  );

  return {
    handleOpen,
    handleClose,
    renderModal,
  };
};

export default useModal;
