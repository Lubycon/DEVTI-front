import React, { cloneElement, isValidElement, ReactNode, useState } from 'react';

import Modal from '../components/molecules/Modal';

interface UseModal {
  children: ReactNode;
  handleAfterOpenCallback?: VoidFunction;
  handleAfterCloseCallback?: VoidFunction;
}

const useModal = ({ handleAfterCloseCallback, handleAfterOpenCallback, children }: UseModal) => {
  const [isOpen, setIsOpen] = useState(true);

  const handleModalOpen = () => {
    setIsOpen(true);
  };

  const handleModalClose = () => {
    setIsOpen(false);
  };

  const renderModal = () => (
    <Modal
      isOpen={isOpen}
      onAfterOpen={handleAfterCloseCallback}
      onAfterClose={handleAfterOpenCallback}
      onModalClose={handleModalClose}
    >
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
