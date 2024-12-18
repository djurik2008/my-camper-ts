import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getCamperById } from '@redux/camper/camperOperations';
import { selectCamper } from '@redux/camper/camperSelectors';
import { resetCamper } from '@redux/camper/camperSlice';
import { CamperPageItem } from 'modules/camperPageItem';
import { useDoneProgressBar } from 'hooks/useDoneProgressBar';

const CamperPage = () => {
  const dispatch = useDispatch();
  const { camperId } = useParams();

  const camper = useSelector(selectCamper);

  useEffect(() => {
    dispatch(getCamperById(Number(camperId)));

    return () => dispatch(resetCamper());
  }, [dispatch, camperId]);

  useDoneProgressBar();

  return camper && <CamperPageItem camper={camper} />;
};

export default CamperPage;
