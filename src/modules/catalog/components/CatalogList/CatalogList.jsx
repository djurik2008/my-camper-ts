import { useSelector } from 'react-redux';
import { selectCampersItems } from '@redux/campers/campersSelectors';
import { CatalogItem } from 'modules/catalog';
import s from './catalogList.module.scss';

const CatalogList = () => {
  const campers = useSelector(selectCampersItems);

  return (
    <section className={s.catalogListSection}>
      <ul className={s.catalogList}>
        {campers.map((camper) => (
          <li key={camper.id}>
            <CatalogItem camper={camper} />
          </li>
        ))}
      </ul>
    </section>
  );
};

export default CatalogList;
