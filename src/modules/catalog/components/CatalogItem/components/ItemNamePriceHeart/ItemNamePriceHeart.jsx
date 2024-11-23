import { sprite } from 'shared/svg';
import s from './itemNamePriceHeart.module.scss';
import clsx from 'clsx';

const ItemNamePriceHeart = ({
  id,
  name,
  price,
  onChange,
  isSelected,
  className,
}) => {
  return (
    <div className={clsx(s.namePriceHeartContainer, className)}>
      <h2 className={s.itemName}>{name}</h2>
      <div className={s.priceHeartContainer}>
        <p className={s.itemPrice}>€{price.toFixed(2)}</p>
        <label className={s.checkboxContainer}>
          <input
            type="checkbox"
            name="selected"
            onChange={() => onChange(id)}
            checked={isSelected}
            className={s.heartCheckbox}
          />
          <svg className={clsx(s.heartCheckboxIcon, isSelected && s.checked)}>
            <use href={sprite + '#heart'}></use>
          </svg>
        </label>
      </div>
    </div>
  );
};

export default ItemNamePriceHeart;
