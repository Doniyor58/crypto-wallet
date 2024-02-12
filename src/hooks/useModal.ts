import { useCallback, useState } from 'react';

export interface ModalHookData {
  isOpenModal: boolean;
  onClose: () => void;
  onOpenModal: () => void;
}

export const useModal = (): ModalHookData => {
  const [isOpenModal, setIsOpenModal] = useState(false);

  const onClose = useCallback(() => setIsOpenModal(false), [setIsOpenModal]);
  const onOpenModal = useCallback(() => setIsOpenModal(true), [setIsOpenModal]);

  return { isOpenModal, onClose, onOpenModal };
};
