import { useState } from 'react';
import DatePicker from 'react-datepicker';
import clsx from 'clsx';
import 'react-datepicker/dist/react-datepicker.css';
import './reactDatePicker.scss';
import s from './inputDatePicker.module.scss';
// import 'react-datepicker/dist/react-datepicker-cssmodules.css';

const InputDatePicker = ({ field, className = null }) => {
  const [startDate, endDate] = field.value;
  const [placeholder, setPlaceholder] = useState('Booking date*');

  return (
    <DatePicker
      calendarStartDay={1}
      dateFormat="dd.MM.YY"
      formatWeekDay={(nameOfDay) => nameOfDay.slice(0, 3)}
      minDate={new Date()}
      selectsRange={true}
      startDate={startDate}
      endDate={endDate}
      onChange={(update) => {
        field.onChange(update);
      }}
      isClearable={true}
      placeholderText={placeholder}
      onFocus={() => setPlaceholder('Select a date between today')}
      onBlur={() => setPlaceholder('Booking date*')}
      className={clsx(s.datePicker, className && className)}
      wrapperClassName={s.wrapper}
      calendarClassName={s.calendar}
    />
  );
};

export default InputDatePicker;
