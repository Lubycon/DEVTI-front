import { PropsWithChildren, useEffect, useState } from 'react';
import { Flex } from 'rebass';

interface ModalProps {
  isOpen: boolean;
  onClose: VoidFunction;
  onOpened?: VoidFunction;
  onClosed?: VoidFunction;
}

const Modal = ({ isOpen, onClose, onOpened, onClosed, children }: PropsWithChildren<ModalProps>) => {
  const [defaultScrollStyle] = useState({
    x: document.body.style.overflowX,
    y: document.body.style.overflowY,
  });

  const lockScroll = () => {
    document.body.style.overflowX = 'hidden';
    document.body.style.overflowY = 'hidden';
  };
  const unlockScroll = () => {
    document.body.style.overflowX = defaultScrollStyle.x;
    document.body.style.overflowY = defaultScrollStyle.y;
  };

  useEffect(() => {
    if (isOpen) {
      onOpened?.();
      lockScroll();
      return;
    }
    onClosed?.();
    unlockScroll();
  }, [isOpen]);

  return isOpen ? (
    <Flex>
      <Flex variant="dimmer" onClick={onClose} />
      <Flex variant="modal">{children}</Flex>
    </Flex>
  ) : (
    <></>
  );
};

export default Modal;
