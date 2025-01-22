import { useEffect, RefObject, MutableRefObject } from 'react';

export const useOutsideClickWithButton = (
  popupRef: MutableRefObject<HTMLElement | null>,
  buttonRef?: RefObject<HTMLButtonElement>,
  isOpen?: boolean,
  onClose?: () => void
): void => {
  useEffect(() => {
    if (!buttonRef || !isOpen || !onClose) {
      return;
    }
    const handleClickOutside = (e: MouseEvent) => {
      if (
        popupRef.current &&
        !popupRef.current.contains(e.target as Node) &&
        buttonRef.current &&
        !buttonRef.current.contains(e.target as Node)
      ) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('click', handleClickOutside);
    }

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [popupRef, buttonRef, isOpen, onClose]);
};
