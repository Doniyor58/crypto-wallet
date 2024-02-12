import {
  useCallback, useEffect, useMemo, useState,
} from 'react';
import { toast } from 'react-toastify';
import useClipboard from 'react-use-clipboard';

import { useTypedSelector } from '../../hooks';
import { ModalHookData, useModal } from '../../hooks/useModal';
import { getUserSelector, isAuthorizedUserSelector } from '../../redux';
import { wait } from '../../utils';

type HeaderHook = () => {
  isAuthorizedUser: boolean;
  userName?: string;
  key?: string;

  onKeyCope: () => void;
} & ModalHookData;

export const useHeader: HeaderHook = () => {
  const { isOpenModal, onOpenModal, onClose } = useModal();

  const [isKeyClickDisabled, setIsKeyClickDisabled] = useState<boolean>(false);
  const { userName, publicKey } = useTypedSelector(getUserSelector);
  const isAuthorizedUser = useTypedSelector(isAuthorizedUserSelector);

  const [, setCopied] = useClipboard(publicKey as string);

  /** keyClick * */
  const key = useMemo(() => publicKey && `(${publicKey.slice(0, 4)}...${publicKey.slice(-4)})`, [publicKey]);
  const onKeyCope = useCallback(() => {
    if (!publicKey || isKeyClickDisabled) return;

    setCopied();
    toast.success('Публичный ключ скопирован');
    setIsKeyClickDisabled(true);
  }, [publicKey, setIsKeyClickDisabled, isKeyClickDisabled, setCopied]);

  useEffect(() => {
    if (isKeyClickDisabled) {
      wait(2000).then(() => {
        setIsKeyClickDisabled(false);
      });
    }
  }, [isKeyClickDisabled, setIsKeyClickDisabled]);

  return {
    isOpenModal,
    onOpenModal,
    onClose,

    isAuthorizedUser,
    userName,
    key,

    onKeyCope,
  };
};
