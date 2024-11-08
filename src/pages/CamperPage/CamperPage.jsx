import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getCamperById } from '@redux/camper/camperOperations';
import { selectCamper } from '@redux/camper/camperSelectors';
import { resetCamper } from '@redux/camper/camperSlice';
import { CamperPageItem } from 'modules/camperPageItem';
import s from './camperPage.module.scss';

const CamperPage = () => {
  const dispatch = useDispatch();
  const { camperId } = useParams();

  const camper = useSelector(selectCamper);

  useEffect(() => {
    dispatch(getCamperById(Number(camperId)));

    return () => dispatch(resetCamper());
  }, [dispatch, camperId]);

  return (
    <main className={s.camperPageMain}>
      {camper && <CamperPageItem camper={camper} />}
    </main>
  );
};

export default CamperPage;
