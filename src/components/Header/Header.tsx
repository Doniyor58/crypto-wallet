import 'react-toastify/dist/ReactToastify.css';

import React from 'react';
import ReactModal from 'react-modal';
import { Slide, toast, ToastContainer } from 'react-toastify';

import { LogoutIcon } from '../../assets/icons';
import { ModalContent } from '../ModalContent';
import modalStyles from '../ModalContent/ModalContent.module.scss';
import { useHeader } from './Header.hook';
import styles from './Header.module.scss';

const Header = () => {
  const {
    isOpenModal, onOpenModal, onClose,
    isAuthorizedUser, userName, key, onKeyCope,
  } = useHeader();

  return (
    <div className={styles.header}>

      <h1 className={styles.title}>Crypto Wallet</h1>

      <div className={styles.info}>
        {userName && <span className={styles.info__name}>{userName}</span>}
        {key
          && (
            <>
              <ToastContainer
                icon={false}
                hideProgressBar
                autoClose={2000}
                transition={Slide}
                closeButton={false}
                pauseOnFocusLoss={false}
                toastClassName={styles.notify}
                position={toast.POSITION.BOTTOM_LEFT}
              />

              <button
                type="button"
                onClick={onKeyCope}
                className={styles.info__key}
              >
                {key}
              </button>
            </>
          )}
      </div>

      <button type="button" className={styles.logout} onClick={onOpenModal}>
        {isAuthorizedUser
          && <LogoutIcon width="20" height="24" color="#FFF" />}
      </button>

      <ReactModal
        isOpen={isOpenModal}
        shouldCloseOnEsc
        shouldCloseOnOverlayClick
        contentLabel="Modal #2"
        className={modalStyles.modal}
        overlayClassName={modalStyles.overlay}
      >
        <ModalContent onClose={onClose} />
      </ReactModal>
    </div>
  );
};

export default React.memo(Header);
