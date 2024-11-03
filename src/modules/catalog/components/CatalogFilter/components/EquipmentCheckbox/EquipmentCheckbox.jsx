import clsx from 'clsx';
import { sprite } from 'shared/svg';
import s from './equipmentCheckbox.module.scss';

const EquipmentCheckbox = ({ item, value, onChange }) => {
  return (
    <label className={s.checkboxRadioLabel}>
      <input
        className={s.checkboxRadio}
        type="checkbox"
        value={item === 'transmission' ? 'automatic' : true}
        checked={item === 'transmission' ? value === 'automatic' : value}
        onChange={(e) => {
          onChange(
            item === 'transmission'
              ? e.target.checked
                ? 'automatic'
                : ''
              : e.target.checked
          );
        }}
      />
      <span
        className={clsx(
          s.customCheckboxRadio,
          (value === 'automatic' && s.checked) || (value && s.checked)
        )}
      >
        <svg className={s.checkboxRadioIcon}>
          <use href={sprite + `#${item}`} />
        </svg>
        <span className={s.checkboxRadioName}>
          {item === 'transmission' ? 'automatic' : item}
        </span>
      </span>
    </label>
  );
};

export default EquipmentCheckbox;
