import { useSelector, useDispatch } from 'react-redux';
import { useEffect, useMemo } from 'react';
import { Catalog } from 'modules/catalog';
import { selectPage } from '@redux/campers/campersSelectors';
import { getCampersByParams } from '@redux/campers/campersOperations';
import { clearCampers } from '@redux/campers/campersSlice';

const CatalogPage = () => {
  const dispatch = useDispatch();

  const page = useSelector(selectPage);

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

  return <Catalog />;
};

export default CatalogPage;
