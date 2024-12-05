import { forwardRef } from 'react';
import { useState } from 'react';
import clsx from 'clsx';
import s from './customDatePickerInput.module.scss';

const CustomDatePickerInput = forwardRef(({ value, onClick }, ref) => {
  const [placeholder, setPlaceholder] = useState('Booking date*');

  return (
    <div onClick={onClick} className={s.customInput}>
      <label>
        <input
          type="text"
          onFocus={() => setPlaceholder('Select a date between today')}
          onBlur={() => setPlaceholder('Booking date*')}
          ref={ref}
          readOnly
          className="visuallyHidden"
          value={value || ''}
        />
        <span
          className={clsx({
            [s.placeholder]: !value,
            [s.value]: value,
          })}
        >
          {value || placeholder}
        </span>
      </label>
    </div>
  );
});

CustomDatePickerInput.displayName = 'CustomDatePickerInput';

export default CustomDatePickerInput;
