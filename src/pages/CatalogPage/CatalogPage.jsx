import { useSelector, useDispatch } from 'react-redux';
import { CatalogList } from 'modules/catalog';
import { selectCampers } from '@redux/campers/campersSelectors';
import { getAllCampers } from '@redux/campers/campersOperations';
import { useEffect } from 'react';

const CatalogPage = () => {
  const dispatch = useDispatch();
  const campers = useSelector(selectCampers);

  useEffect(() => {
    dispatch(getAllCampers());
  }, [dispatch]);

  return <CatalogList campersList={campers} />;
};

export default CatalogPage;
