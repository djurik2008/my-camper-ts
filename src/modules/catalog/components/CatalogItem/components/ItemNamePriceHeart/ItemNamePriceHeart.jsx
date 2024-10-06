import { sprite } from 'shared/svg';
import clsx from 'clsx';
import s from './itemNamePriceHeart.module.scss';

const ItemNamePriceHeart = ({
  id,
  name,
  price,
  func,
  isSelected,
  className,
}) => {
  return (
    <div className={clsx(s.namePriceHeartContainer, className && className)}>
      <h2 className={s.itemName}>{name}</h2>
      <div>
        <p className={s.itemPrice}>€{price}</p>
        <span className={s.checkboxContainer}>
          <input
            type="checkbox"
            name="selected"
            onChange={() => func(id)}
            checked={isSelected}
            className={s.checkbox}
          />
          <svg className={s.iconCheckbox}>
            <use href={sprite + '#heart'}></use>
          </svg>
        </span>
      </div>
    </div>
  );
};

export default ItemNamePriceHeart;
