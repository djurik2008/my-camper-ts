import { sprite } from 'shared/svg';
import s from './itemNamePriceHeart.module.scss';
import { ClassNameProp } from 'shared/types';
import clsx from 'clsx';

interface ItemNamePriceHeartProps extends ClassNameProp {
  id: string;
  name: string;
  price: number;
  onChange: (id: string) => void;
  isSelected: boolean;
}

const ItemNamePriceHeart = ({
  id,
  name,
  price,
  onChange,
  isSelected,
  className,
}: ItemNamePriceHeartProps) => {
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
