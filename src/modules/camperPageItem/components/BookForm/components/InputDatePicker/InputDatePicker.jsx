import DatePicker from 'react-datepicker';
import clsx from 'clsx';
import { CustomDatePickerInput } from '..';
import 'react-datepicker/dist/react-datepicker.css';
import './customDatePicker.scss';
import s from './inputDatePicker.module.scss';

const InputDatePicker = ({ field, className = null }) => {
  const [startDate, endDate] = field.value;

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
      className={clsx(s.datePicker, className)}
      wrapperClassName={s.wrapper}
      calendarClassName={s.calendar}
      customInput={<CustomDatePickerInput />}
    />
  );
};

export default InputDatePicker;
