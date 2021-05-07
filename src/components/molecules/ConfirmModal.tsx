import React, { isValidElement, PropsWithChildren } from 'react';
import { Button, Flex, FlexProps, Text } from 'rebass';

interface ConfirmModalProps extends FlexProps {
  onModalClose?: VoidFunction;
  confirmText?: string;
}

const ConfirmModal = ({ children, onModalClose, confirmText, ...props }: PropsWithChildren<ConfirmModalProps>) => (
  <Flex {...props} flex={1} flexDirection="column" justifyContent="space-between">
    <Flex flex={1} variant="verticalCentralCenter">
      {isValidElement(children) ? (
        children
      ) : (
        <Text color="gray.6" fontWeight={500} textAlign="center" fontSize={16}>
          {children}
        </Text>
      )}
    </Flex>
    <Button
      color="primary"
      onClick={onModalClose}
      height={48}
      fontWeight={600}
      fontSize={16}
      sx={{ borderRadius: 0, overflow: 'inherit' }}
    >
      {confirmText ?? '확인'}
    </Button>
  </Flex>
);

export default ConfirmModal;
