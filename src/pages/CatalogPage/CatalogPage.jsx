import { useSelector, useDispatch } from 'react-redux';
import { useEffect, useMemo } from 'react';
import { CatalogList } from 'modules/catalog';
import { Container, LoadMoreButton } from 'shared/components';
import {
  selectCampersItems,
  selectPage,
  // selectCampersTotal,
} from '@redux/campers/campersSelectors';
import {
  // getAllCampers,
  getCampersByParams,
} from '@redux/campers/campersOperations';
import { setPage, clearCampers } from '@redux/campers/campersSlice';
import s from './catalogPage.module.scss';

const CatalogPage = () => {
  // const [page, setPage] = useState(1);
  // const [campers, setCampers] = useState([]);
  const page = useSelector(selectPage);
  const dispatch = useDispatch();

  const items = useSelector(selectCampersItems);
  // const total = useSelector(selectCampersTotal);

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
      <div style={{ width: '360px', minHeight: '100vh' }}></div>
      <div>
        <CatalogList campersList={items} />
        <LoadMoreButton funk={loadMore} />
      </div>
    </Container>
  );
};

export default CatalogPage;
