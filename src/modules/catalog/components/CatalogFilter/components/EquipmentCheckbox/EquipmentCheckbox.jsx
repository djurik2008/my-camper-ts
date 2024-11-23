import { sprite } from 'shared/svg';
import s from './equipmentCheckbox.module.scss';

const EquipmentCheckbox = ({ item, value, onChange }) => {
  return (
    <label className={s.equipmentCheckboxLabel}>
      <input
        className={s.equipmentCheckbox}
        type="checkbox"
        name="equipment"
        value={item === 'transmission' ? 'automatic' : 'true'}
        checked={item === 'transmission' ? value === 'automatic' : !!value}
        onChange={(e) => onChange(e.target.checked ? e.target.value : '')}
      />
      <span className={s.customEquipmentCheckbox}>
        <svg className={s.customEquipmentCheckboxIcon}>
          <use href={sprite + `#${item}`} />
        </svg>
        <span className={s.customEquipmentCheckboxName}>
          {item === 'transmission' ? 'automatic' : item}
        </span>
      </span>
    </label>
  );
};

export default EquipmentCheckbox;
