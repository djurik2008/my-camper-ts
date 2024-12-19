import { useSelector } from 'react-redux';
import { selectCampersItems } from '@redux/campers/campersSelectors';
import { CatalogItem } from 'modules/catalog';
import s from './catalogList.module.scss';

const CatalogList = ({ children }) => {
  const campers = useSelector(selectCampersItems);

  return (
    <section className={s.catalogListSection}>
      {campers?.length > 0 ? (
        <ul className={s.catalogList}>
          {campers.map((camper) => (
            <li key={camper.id}>
              <CatalogItem camper={camper} />
            </li>
          ))}
        </ul>
      ) : (
        <div>
          <p>No results</p>
        </div>
      )}
      {children}
    </section>
  );
};

export default CatalogList;
