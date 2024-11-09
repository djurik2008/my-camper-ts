import { useSelector, useDispatch } from 'react-redux';
import {
  selectPage,
  selectTotalPages,
  selectIsLoading,
} from '@redux/campers/campersSelectors';
import { setPage } from '@redux/campers/campersSlice';
import { Container, LoadMoreButton } from 'shared/components';
import { CatalogList, CatalogFilter } from 'modules/catalog';
import s from './catalog.module.scss';

const Catalog = () => {
  const dispatch = useDispatch();
  const page = useSelector(selectPage);
  const totalPages = useSelector(selectTotalPages);
  const isLoading = useSelector(selectIsLoading);

  const loadMore = () => {
    dispatch(setPage(page + 1));
  };

  return (
    <main>
      <Container className={s.catalogContainer}>
        <CatalogFilter />
        <div className={s.listButtonWrapper}>
          <CatalogList />
          {page < totalPages && (
            <LoadMoreButton funk={loadMore} isLoading={isLoading} />
          )}
        </div>
      </Container>
    </main>
  );
};

export default Catalog;
