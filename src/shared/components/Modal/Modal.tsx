import { createPortal } from 'react-dom';
import { useCallback, useEffect, ReactNode, MouseEvent } from 'react';
import clsx from 'clsx';
import s from './modal.module.scss';

const modalRoot = document.getElementById('modal-root')!;

type ModalProps = {
  children: ReactNode;
  onClose: () => void;
  isOpen: boolean;
};

const Modal = ({ children, onClose, isOpen }: ModalProps) => {
  const closeModal = useCallback(
    (e: MouseEvent<HTMLDivElement>) => {
      if (e.target === e.currentTarget) {
        onClose();
      }
    },
    [onClose]
  );

  useEffect(() => {
    const prevOverflow = document.body.style.overflow;

    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = prevOverflow;
    }

    return () => {
      document.body.style.overflow = prevOverflow;
    };
  }, [isOpen]);

  return createPortal(
    <div
      className={clsx(s.modalOverlay, isOpen && s.open)}
      onClick={closeModal}
    >
      <span className={s.closeText}>Touch to close &#8855;</span>
      <div className={s.modalContent}>{children}</div>
    </div>,
    modalRoot
  );
};

export default Modal;
