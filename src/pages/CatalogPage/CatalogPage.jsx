import { useSelector, useDispatch } from 'react-redux';
import { useEffect, useMemo } from 'react';
import { CatalogList } from 'modules/catalog';
import { CatalogFilter } from 'modules/catalog';
import { Container, LoadMoreButton } from 'shared/components';
import {
  selectCampersItems,
  selectPage,
  selectTotalPages,
} from '@redux/campers/campersSelectors';
import { getCampersByParams } from '@redux/campers/campersOperations';
import { setPage, clearCampers } from '@redux/campers/campersSlice';
import s from './catalogPage.module.scss';

const CatalogPage = () => {
  const dispatch = useDispatch();

  const items = useSelector(selectCampersItems);
  const page = useSelector(selectPage);
  const totalPages = useSelector(selectTotalPages);

  const loadMore = () => {
    dispatch(setPage(page + 1));
  };

  const params = useMemo(() => {
    return {
      page,
    };
  }, [page]);

  useEffect(() => {
    dispatch(clearCampers());

    return () => {
      dispatch(clearCampers());
    };
  }, [dispatch]);

  useEffect(() => {
    dispatch(getCampersByParams(params));
  }, [dispatch, params]);

  return (
    <Container className={s.catalogPageContainer}>
      <CatalogFilter />
      <div>
        <CatalogList campersList={items} />
        {page < totalPages && <LoadMoreButton funk={loadMore} />}
      </div>
    </Container>
  );
};

export default CatalogPage;
