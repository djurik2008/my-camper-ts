import DatePicker from 'react-datepicker';
import { ControllerRenderProps } from 'react-hook-form';
import clsx from 'clsx';
import { CustomDatePickerInput } from '..';
import { Inputs } from '../../BookForm';
import { ClassNameProp } from 'shared/types';
import 'react-datepicker/dist/react-datepicker.css';
import './customDatePicker.scss';
import s from './inputDatePicker.module.scss';

interface InputDatePickerProps extends ClassNameProp {
  field: ControllerRenderProps<Inputs, 'dates'>;
}

const InputDatePicker = ({ field, className }: InputDatePickerProps) => {
  const [startDate, endDate] = field.value ?? [undefined];

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
