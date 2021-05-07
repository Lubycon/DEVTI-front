import React, { cloneElement, isValidElement, ReactNode, useCallback, useState } from 'react';

import Modal from '../components/molecules/Modal';

interface UseModal {
  children: ReactNode;
  handleOpendCallback?: VoidFunction;
  handleClosedCallback?: VoidFunction;
}

const useModal = ({ handleClosedCallback, handleOpendCallback, children }: UseModal) => {
  const [isOpen, setIsOpen] = useState(true);

  const handleModalOpen = useCallback(() => {
    setIsOpen(true);
  }, []);

  const handleModalClose = useCallback(() => {
    setIsOpen(false);
  }, []);

  const renderModal = () => (
    <Modal isOpen={isOpen} onOpened={handleClosedCallback} onClosed={handleOpendCallback} onClose={handleModalClose}>
      {isValidElement(children)
        ? cloneElement(children, {
            onModalClose: handleModalClose,
          })
        : children}
    </Modal>
  );

  return {
    handleModalOpen,
    handleModalClose,
    renderModal,
  };
};

export default useModal;
