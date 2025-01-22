import { sprite } from 'shared/svg';
import s from './typeRadio.module.scss';

type TypeRadioProps = {
  type: string;
  value: string;
  onChange: (type: string) => void;
};

const TypeRadio = ({ type, value, onChange }: TypeRadioProps) => {
  return (
    <label className={s.typeRadioLabel}>
      <input
        className={s.typeRadio}
        type="radio"
        name="vehicleType"
        value={type}
        checked={value === type}
        onChange={(e) => {
          onChange(e.target.checked ? type : '');
        }}
      />
      <span className={s.customTypeRadio}>
        <svg className={s.customTypeRadioIcon}>
          <use href={sprite + `#${type}`} />
        </svg>
        <span className={s.customTypeRadioName}>
          {type === 'fullyIntegrated'
            ? 'Fully Integrated'
            : type === 'panelTruck'
              ? 'Panel Truck'
              : type}
        </span>
      </span>
    </label>
  );
};

export default TypeRadio;
