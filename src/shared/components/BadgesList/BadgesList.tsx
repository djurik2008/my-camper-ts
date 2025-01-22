import clsx from 'clsx';
import { Badge } from 'shared/components';
import { extractKeysAndValues } from 'helpers/extractKeysAndValues';
import { ClassNameProp, Camper } from 'shared/types';
import s from './badgesList.module.scss';

interface BadgesListProps extends ClassNameProp {
  camperData: Camper;
  advantageKeys: string[];
}

const BadgesList = ({
  camperData,
  advantageKeys,
  className,
}: BadgesListProps) => {
  const camperBadges = extractKeysAndValues(camperData, advantageKeys);
  return (
    <ul className={clsx(s.badgesList, className)}>
      {Object.entries(camperBadges).map(([key, value]) => (
        <li key={key}>
          <Badge name={key} value={value} />
        </li>
      ))}
    </ul>
  );
};

export default BadgesList;
