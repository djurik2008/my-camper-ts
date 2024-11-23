import { useEffect } from 'react';

export const useOutsideClickWithButton = (
  popupRef,
  buttonRef,
  isOpen,
  onClose
) => {
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (
        popupRef.current &&
        !popupRef.current.contains(e.target) &&
        buttonRef.current &&
        !buttonRef.current.contains(e.target)
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
