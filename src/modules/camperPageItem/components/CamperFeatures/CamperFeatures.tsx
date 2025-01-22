import { useSelector } from 'react-redux';
import { selectCamper } from '@redux/camper/camperSelectors';
import { BadgesList } from 'shared/components';
import { CAMP_ADVANTAGES } from 'shared/constants';
import { VEHICLE_DETAILS } from 'shared/constants';
import s from './camperFeatures.module.scss';

const CamperFeatures = () => {
  const camper = useSelector(selectCamper);

  return (
    <div className={s.featuresContainer}>
      <BadgesList
        camperData={camper}
        advantageKeys={CAMP_ADVANTAGES}
        className={s.badgeslist}
      />
      <p className={s.detailsTitle}>Vehicle details</p>
      <ul className={s.detailsList}>
        {VEHICLE_DETAILS.map((detail, idx) => (
          <li key={idx} className={s.detailsItem}>
            <p className={s.detailsFeatures}>{detail}</p>
            <p className={s.detailsFeatures}>{camper[detail]}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CamperFeatures;
