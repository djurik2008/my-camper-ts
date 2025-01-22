import clsx from 'clsx';
import { ControllerRenderProps } from 'react-hook-form';
import { sprite } from 'shared/svg';
import { ClassNameProp } from 'shared/types';
import { Filter } from 'shared/types';
import s from './locationInput.module.scss';

interface LocationInputProps extends ClassNameProp {
  field: ControllerRenderProps<Filter, 'location'>;
}

const LocationInput = ({ field, className }: LocationInputProps) => {
  return (
    <label className={clsx(s.locationInputLabel, className)}>
      <span className={s.inputTitle}>Location</span>
      <input
        type="text"
        placeholder="City"
        {...field}
        className={s.cityInput}
        autoComplete="off"
      />
      <svg className={s.inputIcon}>
        <use href={sprite + '#map'} />
      </svg>
    </label>
  );
};

export default LocationInput;
