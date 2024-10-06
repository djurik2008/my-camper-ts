import { Badge } from 'shared/components';
import { extractKeysAndValues } from 'helpers/extractKeysAndValues';
import s from './badgesList.module.scss';

const BadgesList = ({ camperData, advantageKeys }) => {
  const camperBadges = extractKeysAndValues(camperData, advantageKeys);
  return (
    <ul className={s.badgesList}>
      {Object.entries(camperBadges).map(([key, value]) => (
        <li key={key}>
          <Badge name={key} value={value} />
        </li>
      ))}
    </ul>
  );
};

export default BadgesList;
