import { sprite } from 'shared/svg';
import s from './badge.module.scss';

const Badge = ({ name, value }) => {
  return (
    <div className={s.badge}>
      <svg className={s.badgeIcon}>
        <use href={sprite + `#${name}`}></use>
      </svg>
      <p className={s.badgeName}>{typeof value === 'string' ? value : name}</p>
    </div>
  );
};

export default Badge;
