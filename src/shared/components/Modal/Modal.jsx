import { createPortal } from 'react-dom';
import { useCallback, useEffect } from 'react';
import clsx from 'clsx';
import s from './modal.module.scss';

const modalRoot = document.getElementById('modal-root');

const Modal = ({ children, onClose, isOpen }) => {
  const closeModal = useCallback(
    (e) => {
      if (e.target === e.currentTarget) {
        onClose();
      }
    },
    [onClose]
  );

  useEffect(() => {
    isOpen
      ? (document.body.style.overflow = 'hidden')
      : document.body.removeAttribute('style');

    return () => {
      document.body.removeAttribute('style');
    };
  }, [isOpen]);

  return createPortal(
    <div
      className={clsx(s.modalOverlay, isOpen && s.open)}
      onClick={closeModal}
    >
      <span className={s.closeText}>&#8855; Close &#8855;</span>
      <div className={s.modalContent}>{children}</div>
      <span className={s.closeText}>&#8855; Close &#8855;</span>
    </div>,
    modalRoot
  );
};

export default Modal;
