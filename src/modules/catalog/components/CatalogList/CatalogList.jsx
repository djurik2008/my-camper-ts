import { useSelector } from 'react-redux';
import { selectCampersItems } from '@redux/campers/campersSelectors';
import { CatalogItem } from 'modules/catalog';
import { sprite } from 'shared/svg';
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
        <div className={s.emptyListContainer}>
          <svg className={s.emptyListIcon}>
            <use href={sprite + '#no-results'}></use>
          </svg>
          <p className={s.explainText}>
            Oops, no campers available! Try changing the filter selection, or
            the application might not be working properly.
          </p>
        </div>
      )}
      {children}
    </section>
  );
};

export default CatalogList;
