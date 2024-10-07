import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { CatalogList } from 'modules/catalog';
import { Container } from 'shared/components';
import { selectCampers } from '@redux/campers/campersSelectors';
import { getAllCampers } from '@redux/campers/campersOperations';
import s from './catalogPage.module.scss';

const CatalogPage = () => {
  const dispatch = useDispatch();
  const campers = useSelector(selectCampers);

  useEffect(() => {
    dispatch(getAllCampers());
  }, [dispatch]);

  return (
    <Container className={s.catalogPageContainer}>
      <div style={{ width: '360px', minHeight: '100vh' }}></div>
      <CatalogList campersList={campers} />
    </Container>
  );
};

export default CatalogPage;
