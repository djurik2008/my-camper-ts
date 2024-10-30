import clsx from 'clsx';
import { Badge } from 'shared/components';
import { extractKeysAndValues } from 'helpers/extractKeysAndValues';
import s from './badgesList.module.scss';

const BadgesList = ({ camperData, advantageKeys, className = null }) => {
  const camperBadges = extractKeysAndValues(camperData, advantageKeys);
  return (
    <ul className={clsx(s.badgesList, className && className)}>
      {Object.entries(camperBadges).map(([key, value]) => (
        <li key={key}>
          <Badge name={key} value={value} />
        </li>
      ))}
    </ul>
  );
};

export default BadgesList;
