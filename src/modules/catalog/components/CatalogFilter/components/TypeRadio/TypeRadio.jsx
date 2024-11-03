import clsx from 'clsx';
import { sprite } from 'shared/svg';
import s from './typeRadio.module.scss';

const TypeRadio = ({ type, value, onChange }) => {
  return (
    <label className={s.checkboxRadioLabel}>
      <input
        className={s.checkboxRadio}
        type="radio"
        name="typeOptions"
        value={type}
        checked={value === type}
        onChange={() => onChange(type)}
      />
      <span
        className={clsx(s.customCheckboxRadio, value === type && s.checked)}
      >
        <svg className={s.checkboxRadioIcon}>
          <use href={sprite + `#${type}`} />
        </svg>
        <span className={s.checkboxRadioName}>
          {type === 'fullyIntegrated' ? 'Fully Integrated' : type}
        </span>
      </span>
    </label>
  );
};

export default TypeRadio;
