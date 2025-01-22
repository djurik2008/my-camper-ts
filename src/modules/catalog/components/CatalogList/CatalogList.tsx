import { ReactElement } from 'react';
import { useAppSelector } from '@redux/store';
import {
  selectCampersItems,
  selectIsLoading,
} from '@redux/campers/campersSelectors';
import { CatalogItem } from 'modules/catalog';
import { Loader } from 'shared/components';
import { sprite } from 'shared/svg';
import s from './catalogList.module.scss';

const CatalogList = ({
  children,
}: {
  children: ReactElement<HTMLButtonElement> | false;
}) => {
  const campers = useAppSelector(selectCampersItems);
  const isLoading = useAppSelector(selectIsLoading);

  return (
    <section className={s.catalogListSection}>
      {campers?.length > 0 && (
        <ul className={s.catalogList}>
          {campers.map((camper) => (
            <li key={camper.id}>
              <CatalogItem camper={camper} />
            </li>
          ))}
        </ul>
      )}
      {!isLoading && campers?.length === 0 && (
        <div className={s.emptyListContainer}>
          <svg className={s.emptyListIcon}>
            <use href={sprite + '#no-results'}></use>
          </svg>
          <p className={s.explainText}>
            Oops, no campers available! Try changing the filter selection, or
            check your internet connection. If the issue persists, the
            application might not be working properly.
          </p>
        </div>
      )}
      {children && children}
      {isLoading && <Loader type="content" />}
    </section>
  );
};

export default CatalogList;
