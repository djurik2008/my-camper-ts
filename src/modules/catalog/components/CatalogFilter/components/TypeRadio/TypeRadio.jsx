import { sprite } from 'shared/svg';
import s from './typeRadio.module.scss';

const TypeRadio = ({ type, value, onChange }) => {
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
          {type === 'fullyIntegrated' ? 'Fully Integrated' : type}
        </span>
      </span>
    </label>
  );
};

export default TypeRadio;
